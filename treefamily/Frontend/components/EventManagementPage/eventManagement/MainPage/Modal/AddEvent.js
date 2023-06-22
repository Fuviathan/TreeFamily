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
  if (!data) {
    return [];
  }
  const { data: user, error: userError } = useSWR("http://localhost:8080/member/get-all");
  if (!user) {
    return [];
  }
  const [showAddModal, setShowAddModal] = useState(false);
  const [organizer, setOrganizer] = useState("");

  const method = useForm({
    defaultValues: {
      status: "Đang mở",
      realRevenue: 0,
    },
  });


  const getOrganizer = (organizerData) => {
    setOrganizer(organizerData.toString());
    console.log(organizerData);
    return organizerData.toString();
  };

  async function onSubmit(formData) {
    formData.year = Number(formData.year);
    const hours = formData.time.split("T");
    formData.eventDate = hours[0];
    formData.startTime = hours[1] + ":00";
    formData.time = null;
    console.log(formData);
    // const JSONdata = JSON.stringify(formData);
    // const endpoint = "http://localhost:8080/event-management/create";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSONdata,
    // };
    // const response = await fetch(endpoint, options);
    // if (response.status === 200) {
    //   alert("Thêm khoản thu thành công");
    //   onClose();
    // } else {
    //   const result = await response.json();
    //   alert(result.message);
    // }
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
                        className: "sm:col-span-3",
                        title: "Tên sự kiện",
                        type: "text",
                        name: "revenueName",
                      }}
                    ></Input>
                    <ComboBoxFamily
                      {...{
                        title: "Họ tên cha",
                        people: user?.fullName,
                        className: "sm:col-span-3",
                        name: "dadId",
                      }}
                    ></ComboBoxFamily>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Thời gian",
                        type: "datetime-local",
                        name: "time",
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Địa điểm",
                        type: "text",
                        name: "locate",
                      }}
                    ></Input>
                    <SelectInput
                      {...{
                        className: "sm:col-span-3",
                        title: "Loại sự kiện",
                        name: "status",
                        dataOption: [
                          { value: "Hội thảo" },
                          { value: "Lễ kỷ niệm" },
                          { value: "Họp gia đình" },
                          { value: "Liên hoan gia đình" },
                          { value: "Lễ tang" },
                          { value: "Sự kiện truyền thống" },
                        ],
                      }}
                    ></SelectInput>

                    <SelectInput
                      {...{
                        className: "sm:col-span-3",
                        title: "Tình trạng",
                        name: "status",
                        dataOption: [
                          { value: "Đã đóng" },
                          { value: "Đang mở" },
                        ],
                      }}
                    ></SelectInput>
                    <Input
                      inputType="textarea"
                      {...{
                        className: "sm:col-span-6",
                        title: "Chú thích",
                        type: "text",
                        name: "revenuePerPerson",
                      }}
                    ></Input>
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
