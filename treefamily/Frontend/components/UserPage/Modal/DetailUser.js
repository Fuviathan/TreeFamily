import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
import { Dialog } from "@headlessui/react";
import useSWR from "swr";

import InputLine from "../../UI/InputLine";
// Demo nhập chọn thông tin bố mẹ gửi id form

export default function DetailUser({ isVisible, onClose, person }) {
  const findUserById = (Id) => {
    if (Id === null || Id === "" || Id === 0) return null
    else {
      const { data, error } = useSWR(`http://localhost:8080/member/get-by-id-member?id=${Id}`)
      return data?.fullName
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
      <div className="fixed inset-0 px-4 pt-4 pb-20 bg-gray-500 bg-opacity-75 sm:block sm:p-0">
        <div className="relative z-20 flex flex-col items-center w-full max-w-6xl px-10 py-4 mx-auto mt-16 space-y-12 overflow-y-scroll bg-white border-2 border-solid border-slate-300 h-80vh">
          <div className="pb-12 border-gray-900/10">
            <Dialog.Title
              as="h2"
              className="mt-4 text-base font-semibold leading-7 text-gray-900"
            >
              Thông tin của thành viên
            </Dialog.Title>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <InputLine
                {...{
                  data: person.fullName,
                  className: "sm:col-span-3",
                  title: "Họ Tên",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.gender,
                  className: "sm:col-span-1",
                  title: "Giới tính",
                }}
              ></InputLine>
              <InputLine
                {...{
                  data: person.role,
                  className: "sm:col-span-2",
                  title: "Vai trò",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.dateOfBirth,
                  className: "sm:col-span-3",
                  title: "Ngày sinh",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.mobilePhoneNumber,
                  className: "sm:col-span-3",
                  title: "Số điện thoại",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.career,
                  className: "sm:col-span-3",
                  title: "Nghề nghiệp",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.education,
                  className: "sm:col-span-3",
                  title: "Bằng cấp",
                }}
              ></InputLine>

              <div className="sm:col-span-4"></div>

              <InputLine
                {...{
                  data: findUserById(person.dadId),
                  className: "sm:col-span-3",
                  title: "Họ tên cha",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: findUserById(person.momId),
                  className: "sm:col-span-3",
                  title: "Họ tên mẹ",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.maritalStatus,
                  className: "sm:col-span-3",
                  title: "Tình trạng hôn nhân",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: findUserById(person.partnerId),
                  className: "sm:col-span-3",
                  title: "Họ tên vợ/chồng",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.status === "Đã mất" ? "Đã mất" : "",
                  className: "sm:col-span-3",
                  title: "Trạng thái",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.dateOfDeath,
                  className: "sm:col-span-3",
                  title: "Ngày mất",
                }}
              ></InputLine>

              <InputLine
                {...{
                  data: person.burialPlace,
                  className: "sm:col-span-6",
                  title: "Nơi an táng",
                }}
              ></InputLine>
            </div>
          </div>

          <div className="flex items-center self-end justify-end gap-x-6">
            <button
              onClick={() => onClose()}
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
