import React from "react";
import UserItem from "./UserItem";
import { For } from "react-haiku";

const people = [
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 2,
    name: "Role Duck",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Kết hôn",
    role: "Member",
  },
  {
    life: 3,
    name: "John Which ",
    gender: "Nữ",
    birthDate: "2002-11-11",
    status: "",
    tel: "03213123123",
    job: "Giáo Viên",
    marital: "Kết Hôn",
    role: "Trưởng họ",
  },
  {
    life: 4,
    name: "Lady Elsa",
    gender: "Nữ",
    birthDate: "1999-05-11",
    status: "Đã mất",
    tel: "0333123123",
    job: "Kỹ sư",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  {
    life: 1,
    name: "Lindsay Walton",
    gender: "Nam",
    birthDate: "2020-05-11",
    status: "Đã mất",
    tel: "03213123123",
    job: "Bác sĩ",
    marital: "Độc thân",
    role: "Member",
  },
  // More people...
];

export default function UserTable() {
  console.log(people);
  return (
    <div className="flex flex-col mt-8  h-[80vh] overflow-y-scroll">
      {/* <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8"> */}
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
        <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
          <table className="min-w-full divide-y divide-gray-300 ">
            <thead className="sticky top-0 z-20 rounded-t-lg bg-gray-50">
              <tr className="">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"
                >
                  Thế hệ
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Họ Tên
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Giới tính
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Ngày sinh
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Trạng thái
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Số điện thoại
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Nghề nghiệp
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Tình trạng hôn nhân
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Vai trò
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <For
                each={people}
                render={(person, index) => <UserItem person={person} />}
              />
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
