import React from "react";
import { For, If } from "react-haiku";
import { useState } from "react";
import useSWR from "swr";
import ItemStatistics from "./ItemStatistics";
import StatisticsPdfPrint from "./StatisticsPdfPrint";

export default function StatisticsTable({ startDate, endDate }) {
  const [pdf, setPdf] = useState(false);

  const { data, error } = useSWR(
    `http://localhost:8080/expense-management/financial-statement?effectiveStartDate=${startDate}&effectiveEndDate=${endDate}`
  );
  if (!data) {
    return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>;
  }
  console.log(data);

  // let totalRevenue = data?.totalRevenue;
  // let dataMember = data?.revenueDetails;
  // const b = data?.revenueManagements;
  // const a = b.filter((object) => {
  //   return object.year == filterYear;
  // });
  return (
    <div className="flex flex-col mt-8 overflow-y-scroll h-80vh relative">
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
                  Tên khoản chi
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Số tiền
                </th>

                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Chi tiết
                </th>
              </tr>
            </thead>
            {/* <tbody className="bg-white divide-y divide-gray-200 "> */}
            <If isTrue={data}>
              <ItemStatistics
                item={data}
                startDate={startDate}
                endDate={endDate}
              />

              {/* <For
                  each={dataMember}
                  render={(item, index) => (
                  )}
                /> */}
            </If>
            {/* </tbody> */}
            <tfoot>
              <tr>
                <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 "></td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  Số tiền còn lại
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {data.remainingBalance} VNĐ
                </td>

                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          setPdf(true);
        }}
        className="fixed right-32 bottom-80 inline-flex items-center justify-center px-4 py-2 ml-12 text-base font-medium text-black bg-red-400 border border-black rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
      >
        Xuất file PDF
      </button>

      <If isTrue={pdf}>
        <StatisticsPdfPrint
          item={data}
          startDate={startDate}
          endDate={endDate}
          pdf={setPdf}
        ></StatisticsPdfPrint>
      </If>
    </div>
  );
}
