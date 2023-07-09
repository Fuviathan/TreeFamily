import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../UI/Input";
import ComboBoxPermission from "./miniComponents/ComboBoxPermission";
import useSWR from "swr";

export default function DeletePermission({ isVisible, onClose, item }) {
  const method = useForm({
    defaultValues: {
      id: item.id,
    },
  });

  const { data: permission, error: permissionError } = useSWR(
    "http://localhost:8080/permission-management/get-all"
  );
  if (!permission) {
    return <></>;
  }

  async function onSubmit(formData) {
    const JSONdata = JSON.stringify(formData);
    formData.id = item.id;
    const endpoint = `http://localhost:8080/permission-management/delete?id=${item.id}&idPermissionReplace=${formData.idPermissionReplace}`;
    const options = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(endpoint, options);
    if (response.status === 204) {
      alert("Xóa thành công");
    } else {
      const result = await response.json();
      alert("result");
    }
    onClose();
  }
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
              onSubmit={method.handleSubmit(onSubmit)}
              className="z-20 flex flex-col items-center max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
            >
              <div className="w-full px-10 space-y-12 overflow-y-auto">
                <div className="pb-12 px-24 border-gray-900/10">
                  <Dialog.Title
                    as="h2"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    Xóa nhóm quyền - Thành viên
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập thông tin xóa
                  </div>

                  <div className="grid grid-cols-1  mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* <div className="sm:col-span-6"> */}
                    <label className="block text-sm font-medium leading-6 text-gray-900 sm:col-span-3">
                      Chuyển quyền sở hữu<br></br> sang nhóm quyền khác{" "}
                      <strong className="text-red-500">(*)</strong>
                    </label>

                    <ComboBoxPermission
                      {...{
                        title: "",
                        people: permission,
                        className: "sm:col-span-3 ",
                        name: "idPermissionReplace",
                      }}
                    ></ComboBoxPermission>

                    <Dialog.Title
                      as="h8"
                      className="sm:col-span-6 text-left text-base font-semibold leading-7 text-gray-900 border rounded-xl border-indigo-400 pb-12 px-2"
                    >
                      <strong className="text-indigo-400">Thông tin:</strong>
                      <br></br>Tất cả thành viên thuộc nhóm quyền cần xóa sẽ
                      được chuyển sang quyền sở hữu khác theo chuyển ở trên
                    </Dialog.Title>
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
