import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../../UI/Input";
import SelectInput from "../../../../UI/SelectInput";
import ComboBoxFamily from "../../../expenseManagement/MainPage/Modal/miniComponents/ComboBoxFamily";
import useSWR from "swr";

export default function UpdateRevenue({ isVisible, onClose, item }) {
  const method = useForm({
    defaultValues: {
      id: item.id,
      sponsorsName: item.sponsorsName,
      typeOfSponsorship: item.typeOfSponsorship,
      organization: item.organization,
      note: item.note,
      date: item.date,
      sponsorshipMoney: item.sponsorshipMoney,
      financialSponsorshipId: item.financialSponsorshipId,
    },
  });

  const { data: member, error: memberError } = useSWR(
    "http://localhost:8080/member/get-all-by-age"
  );

  if (!member) {
    return <></>;
  }

  // Lấy id người nhận
  const foundIdName = member.filter(
    (name) => name.fullName === item.sponsorsName
  );
  const memberID = foundIdName.length > 0 ? foundIdName[0].id : null;

  async function onSubmit(formData) {
    formData.id = Number(formData.id);
    formData.sponsorshipMoney = Number(formData.sponsorshipMoney);

    console.log(formData);
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/sponsorship-detail/update";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      alert("Sửa thành công");
      onClose();
    } else {
      const result = await response.json();
      alert(result.message);
    }
  }
  return (
    <Dialog
      onClick={(e) => {
        e.stopPropagation();
      }}
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
                    Sửa thông tin nhà tài trợ
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập thông tin cần sửa
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* <Input
                      {...{
                        className: "sm:col-span-4",
                        title: "Tên nhà tài trợ",
                        type: "text",
                        name: "sponsorsName",
                      }}
                    ></Input> */}

                    <ComboBoxFamily
                      {...{
                        data: memberID,
                        title: "Tên nhà tài trợ",
                        people: member,
                        className: "sm:col-span-4",
                        name: "sponsorsName",
                      }}
                    ></ComboBoxFamily>
                    <SelectInput
                      {...{
                        className: "sm:col-span-2",
                        title: "Loại tài trợ",
                        name: "typeOfSponsorship",
                        dataOption: [
                          { value: "Cá nhân" },
                          { value: "Tổ chức" },
                        ],
                      }}
                    ></SelectInput>
                    <Input
                      {...{
                        data: " ",
                        className: "sm:col-span-3",
                        title: "Tên tổ chức",
                        type: "text",
                        name: "organization",
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Ngày đóng góp",
                        type: "date",
                        name: "date",
                      }}
                    ></Input>
                    <Input
                      {...{
                        data: " ",
                        className: "sm:col-span-3",
                        title: "Chú thích",
                        type: "text",
                        name: "note",
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Số tiền đóng góp",
                        type: "number",
                        name: "sponsorshipMoney",
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
        </div>
      </div>
    </Dialog>
  );
}
