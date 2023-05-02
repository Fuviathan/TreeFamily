import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
export default function AddMember() {
  const [isCheckedMarital, setIsCheckedMarital] = useState("");
  const [isCheckedStatus, setIsCheckedStatus] = useState(false);

  const handleChangeMarital = (event) => {
    setIsCheckedMarital(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChangeStatus = (event) => {
    setIsCheckedStatus(event.target.checked);
  };
  return (
    <Fragment>
      <div className="fixed h-screen w-full top-0 bg-slate-200 fixed bg-gray-700"></div>
      <form
        className="flex flex-col items-center py-4 max-w-3xl border-solid border-2 border-slate-300 mt-16 mx-auto h-80vh z-20 relative bg-white"
        mb-4
      >
        <div className="space-y-12  overflow-y-scroll px-10 w-full">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Thông tin cá nhân
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thành viên nhập thông tin của bản thân
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ Tên
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Giới tính
                </label>
                <div className="mt-2">
                  <select
                    id="sex"
                    name="sex"
                    autoComplete="sex"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Vai trò
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    autoComplete="role"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Trưởng họ</option>
                    <option>Thành viên</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="birth-date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ngày sinh
                </label>
                <div className="mt-2">
                  <input
                    id="birth-date"
                    name="birth-date"
                    type="date"
                    autoComplete="date"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Số điện thoại
                </label>
                <div className="mt-2">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    max={10}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="status"
                      name="status"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={isCheckedStatus}
                      onChange={handleCheckboxChangeStatus}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="status"
                      className="font-medium text-gray-900"
                    >
                      Trạng thái
                    </label>
                  </div>
                </div>
              </div>
              {isCheckedStatus && (
                <>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="death-date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ngày mất
                    </label>
                    <div className="mt-2">
                      <input
                        id="death-date"
                        name="death-date"
                        type="date"
                        autoComplete="date"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="death-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nơi mất:
                    </label>
                    <div className="mt-2">
                      <input
                        id="death-address"
                        name="death-address"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="sm:col-span-3">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nghề nghiệp
                </label>
                <div className="mt-2">
                  <input
                    id="job"
                    name="job"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="education"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Học vấn
                </label>
                <div className="mt-2">
                  <select
                    id="education"
                    name="education"
                    autoComplete="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Chưa Tốt Nghiệp</option>
                    <option>Đã tốt nghiệp</option>
                    <option>Tốt nghiệp đại học</option>
                  </select>
                </div>
              </div>

              <fieldset className="sm:col-span-6 ">
                <div className="mt-6 space-x-40 flex">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Tình trạng hôn nhân
                  </legend>
                  <div className="flex items-center gap-x-3 ">
                    <input
                      id="single"
                      name="marital-status"
                      type="radio"
                      value="single"
                      checked={isCheckedMarital === "single"}
                      onChange={handleChangeMarital}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="single"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Độc thân
                    </label>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <input
                      id="married"
                      name="marital-status"
                      type="radio"
                      value="married"
                      checked={isCheckedMarital === "married"}
                      onChange={handleChangeMarital}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="married"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Đã kết hôn
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* {isCheckedMarital === "married" && (
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mylove"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ tên vợ/chồng
                  </label>
                  <div className="mt-2">
                    <select
                      id="mylove"
                      name="mylove"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Chọn</option>
                      <option>Nguyễn Văn A</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
              )} */}

              <If isTrue={isCheckedMarital === "married"}>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mylove"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ tên vợ/chồng
                  </label>
                  <div className="mt-2">
                    <select
                      id="mylove"
                      name="mylove"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Chọn</option>
                      <option>Nguyễn Văn A</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
              </If>

              <div className="sm:col-span-4 mt-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Thông tin cha mẹ
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Thành viên nhập thông tin cha mẹ của bản thân
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="father"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ tên cha
                </label>
                <div className="mt-2">
                  <select
                    id="father"
                    name="father"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Chọn</option>
                    <option>Nguyễn Văn A</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="father"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ tên mẹ
                </label>
                <div className="mt-2">
                  <select
                    id="father"
                    name="father"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Chọn</option>
                    <option>Phạm Thị B</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end self-end gap-x-6 mr-20">
          <button
            type="button"
            // className="text-sm font-semibold leading-6 text-gray-900 bg-indigo-600 rounded-md"
            className="rounded-md bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </Fragment>
    // <div className="flex flex-col items-center bg-slate-900 h-screen ">

    // </div>
  );
}
