import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";

export default function AddNewGuest({ isVisible, onClose, id }) {
  const method = useForm({
    defaultValues: {
      eventManagementId: id,
    },
  });
  async function onSubmit(formData) {
    formData.startAge = Number(formData.startAge)
    formData.endAge = Number(formData.endAge)
    formData.eventManagementId = Number(formData.eventManagementId)
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/guest-management/set-up-guest";
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
      alert("Thêm khách mời thành công");
      onClose();
    } else {
      const result = await response.json();
      alert(result.message);
    }
  }

  if (!isVisible) return <></>;
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
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
                    Thiết lập khách mời
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Thiết lập khách mời cho sự kiện
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="items-center block text-sm font-medium leading-6 text-gray-900 sm:col-span-1 gap-x-3">
                      <div>Chọn tất cả khách mời</div>
                      <div className="mt-2">
                        <input
                          {...method.register("chooseAll")}
                          className="w-8 h-6 text-indigo-600 border-gray-300 rounded-xl focus:ring-indigo-600"
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="mt-2 sm:col-span-1">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Giới tính
                      </label>
                      <div className="mt-4">
                        <select
                          disabled = {isChecked}
                          {...method.register('gender')}
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value={null}>
                            Tất cả
                          </option>
                          <option value={"Nam"}>
                            Nam
                          </option>
                          <option value={"Nữ"}>
                            Nữ
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-2 ml-8 sm:col-span-4">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Độ tuổi
                      </label>
                      <div className="grid w-full grid-cols-3">
                         
                        <input disabled = {isChecked} {...method.register('startAge')} type='number' className="col-span-1 px-4 py-2 mt-4 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        <div className="col-span-1 mt-6 text-lg gap-x-6">
                          Đến
                        </div>
                        <input disabled = {isChecked} {...method.register('endAge')} type='number' className="col-span-1 px-4 py-2 mt-4 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
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
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Dialog>
  );
}
