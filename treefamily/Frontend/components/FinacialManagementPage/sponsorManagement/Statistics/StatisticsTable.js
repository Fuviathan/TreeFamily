import React from "react";
import { For, If } from "react-haiku";
import useSWR from "swr";
import ItemRevenueStatistics from "./ItemRevenueStatistics";

export default function StatisticsTable({ startDate, endDate }) {
  const { data, error } = useSWR(
    `http://localhost:8080/financial-sponorship/report?effectiveStartDate=${startDate}&effectiveEndDate=${endDate}`
  );
  if (!data) {
    return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>;
  }

  let totalMoney = data?.totalMoney;
  let sponsorsipDetails = data?.sponsorsipDetails;
  // const b = data?.revenueManagements;
  // const a = b.filter((object) => {
  //   return object.year == filterYear;
  // });
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
                  Tên nhà tài trợ
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Ngày tài trợ
                </th>

                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Số tiền tài trợ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <If isTrue={sponsorsipDetails}>
                <For
                  each={sponsorsipDetails}
                  render={(item, index) => (
                    <ItemRevenueStatistics item={item} index={index} />
                  )}
                />
              </If>
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
                  Tổng tiền tài trợ
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"></td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"></td>

                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {totalMoney} VNĐ
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
