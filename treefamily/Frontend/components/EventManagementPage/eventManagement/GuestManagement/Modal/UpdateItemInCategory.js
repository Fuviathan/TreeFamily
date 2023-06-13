import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../../UI/Input";
import SelectInput from "../../../../UI/SelectInput";

export default function UpdateRevenue({ isVisible, onClose, item }) {
  const method = useForm({
    defaultValues: {
      id: item.id,
      payer: item.payer,
      money: item.money,
      data: item.data,
      status: item.status,
    },
  });
  async function onSubmit(formData) {
    formData.id = Number(formData.id);
    formData.year = Number(formData.year);
    formData.revenuePerPerson = Number(formData.revenuePerPerson);
    if (formData.status === "Đã đóng") {
      formData.status = true;
    }
    if (formData.status === "Chưa đóng") {
      formData.status = false;
    }
    console.log(formData);
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/revenue-detail/update";
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
                    Chi tiết thông tin
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Sửa thông tin
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Người đóng",
                        type: "text",
                        name: "payer",
                        minLength: 4,
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-4",
                        title: "Số tiền đóng",
                        type: "number",
                        name: "money",
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Ngày đóng",
                        type: "date",
                        name: "date",
                        require: "false",
                      }}
                    ></Input>

                    <SelectInput
                      {...{
                        className: "sm:col-span-2",
                        title: "Tình trạng",
                        name: "status",
                        dataOption: [
                          { value: "Đã đóng" },
                          { value: "Chưa đóng" },
                        ],
                      }}
                    ></SelectInput>
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
