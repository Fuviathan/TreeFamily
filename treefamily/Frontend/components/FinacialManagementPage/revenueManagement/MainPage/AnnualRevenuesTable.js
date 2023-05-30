import React from "react";
import RevenueItem from "./RevenueItem";
import { For } from "react-haiku";
import useSWR from "swr";

export default function AnnualRevenuesTable() {
  const { data, error } = useSWR(
    "http://localhost:8080/revenue-management/get-all"
  );
  if (!data) {
    return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>;
  }
  return (
    <div className="flex flex-col mt-8 overflow-y-scroll h-80vh">
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
                  STT
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Năm
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Tên khoản thu
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Mức thu/1 thành viên
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Tình trạng
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Ngày hết hạn thu
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <For
                each={data}
                render={(item, index) => (
                  <RevenueItem item={item} index={index} />
                )}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
