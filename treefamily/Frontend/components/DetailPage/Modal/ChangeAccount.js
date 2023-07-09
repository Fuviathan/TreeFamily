import React, { useRef } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";

export default function ChangeAccount({ isVisible, onClose, person }) {
  console.log(person)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      memberId: person.memberId,
      userName: person.userName,
      role: person.role
    },
  });
  const password = useRef()
  password.current = watch("newPassword", "")
  async function onSubmit(formData) {
    formData.password = formData.newPassword 
    console.log(formData)
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/member/update-account";
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
      alert("Sửa thông tin tài khoản thành công");
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
      <div className="fixed inset-0 flex px-4 pt-4 pb-20 text-center bg-gray-500 bg-opacity-75 sm:block sm:p-0 ">
        <div className="z-20 flex items-center justify-center h-full ">
          <form
            className="z-20 flex flex-col items-center w-3/12 max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full px-10 space-y-12 overflow-y-auto">
              <div className="pb-12 border-gray-900/10">
                <Dialog.Title
                  as="h2"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Sửa thông tin tài khoản
                </Dialog.Title>

                <div className="mt-1 text-sm leading-6 text-gray-600">
                  Nhập thông tin cần sửa
                </div>

                <div className="grid grid-cols-1 pb-24 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className='sm:col-span-6'>
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tên tài khoản mới
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("userName", { required: 'Tên tài khoản mới không được để trống' })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                      />
                    </div>
                    {errors.userName && (
                      <span className="block mt-2 text-left text-red-500 opacity-80">
                        {errors.userName.message}
                      </span>
                    )}
                  </div>
                  <div className='sm:col-span-6'>
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mật khẩu mới
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        {...register("newPassword", {
                          required: 'Mật khẩu không được để trống',
                          validate: {
                            secure_password: v => v.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) !== null || "Mật khẩu phải có ít nhất 8 ký tự, bao gồm 1 chữ hoa, 1 chữ thường và 1 số",
                          }
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                      />
                    </div>
                    {errors.newPassword && (
                      <span className="block mt-2 text-left text-red-500 opacity-80">
                        {errors.newPassword.message}
                      </span>
                    )}
                  </div>
                  <div className='sm:col-span-6'>
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nhập lại mật khẩu
                    </label>
                    <div className="mt-2">
                      <input
                        type='password'
                        {...register("NewPassword", {
                          required: 'Mời nhập lại mật khẩu',
                          validate: (value) =>
                            value === password.current || "Mật khẩu mới không trùng khớp",
                        }
                        )}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                      />
                    </div>
                    {errors.NewPassword && (
                      <span className="block mt-2 text-left text-red-500 opacity-80">
                        {errors.NewPassword.message}
                      </span>
                    )}
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
        </div>
      </div>
    </Dialog>
  );
}