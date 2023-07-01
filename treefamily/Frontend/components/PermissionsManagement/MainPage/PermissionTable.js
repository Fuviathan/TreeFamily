import React from "react";
import { For } from "react-haiku";
import useSWR from "swr";
import PermissionItem from "./PermissionItem";

export default function PermissionTable() {
  const { data, error } = useSWR(
    "http://localhost:8080/permission-management/get-all"
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
                  Nhóm Quyền
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Mô tả nhóm quyền
                </th>
                <th
                  scope="col"
                  className="px-3 w-1/12 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <For
                each={data}
                render={(item, index) => (
                  <PermissionItem item={item} index={index} />
                )}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
