import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../UI/Input";
import useSWR from "swr";
import ComboBoxFamily from "../../../UserManagementPage/UserPage/Modal/miniComponents/ComboBoxFamily";
import ComboBoxPermission from "./miniComponents/ComboBoxPermission";

export default function ViewUserPermission({ isVisible, onClose, item }) {
  const method = useForm({
    defaultValues: {
      role: item.role,
      fullName: item.fullName,
      userName: item.userName,
      password: item.password,
    },
  });
  async function onSubmit(formData) {}
  if (!isVisible) return <></>;
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-20"
      open={isVisible}
      onClose={onClose}
    >
      <div className="fixed inset-0 flex px-4 pt-4 pb-20 text-center bg-gray-500 bg-opacity-75 sm:block sm:p-0 ">
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
                    Thêm tài khoản thành viên
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập thông tin cho tài khoản thành viên
                  </div>

                  <div className="grid grid-cols-1 pb-24 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Tên thành viên",
                        type: "text",
                        name: "fullName",
                        disabled: "disabled"
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Vai trò",
                        type: "text",
                        name: "role",
                        disabled: "disabled"
                      }}
                    ></Input>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Tên tài khoản",
                        type: "text",
                        name: "userName",
                        disabled: "disabled"
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Mật khẩu",
                        type: "text",
                        name: "password",
                        disabled: "disabled"
                      }}
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                <button
                  onClick={() => onClose()}
                  type="button"
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
