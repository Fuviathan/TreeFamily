import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../UI/Input";
import useSWR from "swr";
import ComboBoxFamily from "../../../UserManagementPage/UserPage/Modal/miniComponents/ComboBoxFamily";
import ComboBoxPermission from "./miniComponents/ComboBoxPermission";

export default function AddUserPermission({ isVisible, onClose }) {
  const method = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { data: user, error: userError } = useSWR(
    "http://localhost:8080/member/get-all-by-age"
  );
  const { data: permission, error: permissionError } = useSWR(
    "http://localhost:8080/permission-management/get-all"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = method;

  async function onSubmit(formData) {
    formData.memberId = Number(formData.memberId);
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/member/sign-up";
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
      alert("Thêm tài khoản mới thành công");
      onClose();
    } else {
      const result = await response.json();
      alert(result.message);
    }
  }

  useEffect(() => {
    if (userError) {
      console.error("Error fetching user data:", userError);
    }
    if (permissionError) {
      console.error("Error fetching permission data:", permissionError);
    }
  }, [userError, permissionError]);

  if (!user) {
    return <></>;
  }

  if (!permission) {
    return <></>;
  }

  if (!isVisible) {
    return <></>;
  }

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
              onSubmit={handleSubmit(onSubmit)}
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
                    <ComboBoxFamily
                      {...{
                        title: "Thành viên trong gia phả",
                        people: user,
                        className: "sm:col-span-3",
                        name: "memberId",
                      }}
                    ></ComboBoxFamily>
                    <ComboBoxPermission
                      {...{
                        title: "Quyền",
                        people: permission,
                        className: "sm:col-span-3",
                        name: "role",
                      }}
                    ></ComboBoxPermission>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Tên tài khoản",
                        type: "text",
                        name: "userName",
                        minLength: 4,
                      }}
                    ></Input>

                    <div className="sm:col-span-3 flex flex-col">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Mật khẩu
                      </label>
                      <div className="mt-2 flex items-center">
                        <input
                          type={showPassword ? "text" : "password"} // Sử dụng type "text" khi showPassword là true
                          {...register("password", {
                            required: "Mật khẩu không được để trống",
                            validate: {
                              secure_password: (v) =>
                                v.match(
                                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                                ) !== null ||
                                "Mật khẩu phải có ít nhất 8 ký tự, bao gồm 1 chữ hoa, 1 chữ thường và 1 số",
                            },
                          })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                        />
                      </div>
                      {errors.password && (
                        <span className="block mt-2 text-left text-red-500 w-48 opacity-80">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="col-span-3"></div>

                    <label className="ml-2 text-sm text-gray-600 flex items-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox mr-1"
                        onChange={(e) => setShowPassword(e.target.checked)}
                      />
                      <span>Hiển thị mật khẩu</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-3 mr-10 gap-x-6">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="px-3 py-2 text-sm font-semibold text-red-500 bg-white border border-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white"
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
