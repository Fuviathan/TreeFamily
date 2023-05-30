import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../../UI/Input";
import SelectInput from "../../../../UI/SelectInput";

export default function DetailRevenue({ isVisible, onClose, item }) {
  const method = useForm({
    defaultValues: {
      id: item.id,
      year: item.year,
      dueDate: item.dueDate,
      status: item.status,
      revenuePerPerson: item.revenuePerPerson,
      revenueName: item.revenueName,
    },
  });
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
            <form className="z-20 flex flex-col items-center max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300">
              <div className="w-full px-10 space-y-12 overflow-y-auto">
                <div className="pb-12 border-gray-900/10">
                  <Dialog.Title
                    as="h2"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    Chi tiết mức thu
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Thông tin mức thu
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Năm",
                        type: "text",
                        name: "year",
                        minLength: 4,
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Hạn thu",
                        type: "date",
                        name: "dueDate",
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-2",
                        title: "Tình trạng",
                        type: "text",
                        name: "status",
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Tên khoản thu",
                        type: "text",
                        name: "revenueName",
                        disabled: "disabled",
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Mức Thu/ 1 người",
                        type: "text",
                        name: "revenuePerPerson",
                        disabled: "disabled",
                      }}
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                <button
                  onClick={() => onClose()}
                  className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Đóng
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Dialog>
  );
}
