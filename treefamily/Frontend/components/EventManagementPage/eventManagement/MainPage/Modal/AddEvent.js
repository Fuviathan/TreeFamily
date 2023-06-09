import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../../UI/Input";
import SelectInput from "../../../../UI/SelectInput";
import useSWR from "swr";
import ComboBoxFamily from "../../../../UserManagementPage/UserPage/Modal/miniComponents/ComboBoxFamily";
import AddExpense from "../../../../FinacialManagementPage/expenseManagement/MainPage/Modal/AddExpense";
import { If } from "react-haiku";

export default function AddEvent({ isVisible, onClose }) {
  const { data, error } = useSWR(
    "http://localhost:8080/expense-management/get-all"
  );

  const { data: user, error: userError } = useSWR(
    "http://localhost:8080/member/get-all-by-age"
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const [organizer, setOrganizer] = useState("");
  const [isCheckedEvenType, setIsCheckedEvenType] = useState("");

  const method = useForm();

  if (!user) {
    return [];
  }
  if (!data) {
    return [];
  }

  const changeTypeEvent = (event) => {
    setIsCheckedEvenType(event.target.value);
  };
  async function onSubmit(formData) {
    formData.startTime = formData.startTime + ":00";
    formData.endTime = formData.endTime + ":00";
    console.log(formData);
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/event-management/create";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      alert("Thêm sự kiện thành công");
      onClose();
    } else {
      const result = await response.json();
      alert(result.message);
    }
  }

  if (!isVisible) return <></>;
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-20"
      open={isVisible}
      onClose={onClose}
    >
      <div className="fixed inset-0 flex px-4 pt-4 pb-20 text-center bg-gray-500 bg-opacity-75 sm:block sm:p-0">
        <div className="z-20 flex items-center justify-center h-full ">
          <FormProvider {...method}>
            <form
              className="z-20 flex flex-col items-center max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
              onSubmit={method.handleSubmit(onSubmit)}
            >
              <div className="w-full px-10 space-y-12 overflow-y-auto">
                <div className="pb-12 border-gray-900/10">
                  <Dialog.Title
                    as="h2"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    Thêm mới sự kiện
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập thông tin sự kiện
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      {...{
                        className: "sm:col-span-4",
                        title: "Tên sự kiện",
                        type: "text",
                        name: "revenueName",
                      }}
                    ></Input>
                    <ComboBoxFamily
                      {...{
                        title: "Người quản lý sự kiện",
                        people: user,
                        className: "sm:col-span-2",
                        name: "memberId",
                      }}
                    ></ComboBoxFamily>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Ngày bắt đầu",
                        type: "date",
                        name: "eventDate",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Giờ bắt đầu",
                        type: "time",
                        name: "startTime",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Giờ kết thúc",
                        type: "time",
                        name: "endTime",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Địa điểm tổ chức",
                        type: "text",
                        name: "address",
                      }}
                    ></Input>
                    <SelectInput
                      {...{
                        className: "sm:col-span-2",
                        title: "Loại sự kiện",
                        name: "eventType",
                        dataOption: [
                          { value: "Hội thảo" },
                          { value: "Lễ kỷ niệm" },
                          { value: "Họp gia đình" },
                          { value: "Liên hoan gia đình" },
                          { value: "Lễ tang" },
                          { value: "Sự kiện truyền thống" },
                          { value: "Khác*" },
                        ],
                        onChange: changeTypeEvent,
                      }}
                    ></SelectInput>

                    <If isTrue={isCheckedEvenType === "Khác*"}>
                      <Input
                        {...{
                          data: " ",
                          className: "sm:col-span-2",
                          title: "Nhập loại sự kiện",
                          name: "eventType",
                          type: "text",
                        }}
                      ></Input>
                    </If>

                    {/* <SelectInput
                      {...{
                        className: "sm:col-span-2",
                        title: "Tình trạng",
                        name: "status",
                        dataOption: [
                          { value: "Đã đóng" },
                          { value: "Đang mở" },
                        ],
                      }}
                    ></SelectInput> */}
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Chi tiết sự kiện
                      </label>
                      <div className="mt-2">
                        <textarea
                          {...method.register("contentEvent")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Chú thích
                      </label>
                      <div className="mt-2">
                        <textarea
                          {...method.register("note")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="px-3 py-2 text-sm font-semibold text-red-500 bg-white border border-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white "
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Lưu
                </button>
              </div>
            </form>
          </FormProvider>
          <If isTrue={showAddModal}>
            <AddExpense
              isVisible={showAddModal}
              onClose={() => setShowAddModal(false)}
              // item={item}
            />
          </If>
        </div>
      </div>
    </Dialog>
  );
}
