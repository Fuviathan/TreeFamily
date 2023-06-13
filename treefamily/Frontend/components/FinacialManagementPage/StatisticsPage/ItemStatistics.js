import Link from "next/link";
import React from "react";
import { useState } from "react";
import { If } from "react-haiku";
import MainPageSponsor from "../sponsorManagement/Statistics/MainPage";
import MainPageRevenue from "../revenueManagement/Statistics/MainPage";
import MainPageExpense from "../expenseManagement/Statistics/MainPage";
export default function ItemStatistics({ item, index, startDate, endDate }) {
  const [statisticRevenue, setStatisticRevenue] = useState(false);
  const [statisticExpense, setStatisticExpense] = useState(false);
  const [statisticSponsor, setStatisticSponsor] = useState(false);

  return (
    <tbody className="bg-white divide-y divide-gray-200 ">
      <tr>
        <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
          1
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          Dư kỳ trước
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          {item.previousBalance}
        </td>

        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"></td>
      </tr>

      <tr>
        <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
          2
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          Thu theo định mức
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          {item.totalRevenue}
        </td>

        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          <button
            onClick={(e) => {
              setStatisticRevenue(true);
              e.stopPropagation();
            }}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Xem chi tiết
          </button>
        </td>
      </tr>

      <tr>
        <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
          3
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          Số tiền được tài trợ
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          {item.totalSposorship}
        </td>

        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          <button
            onClick={(e) => {
              setStatisticSponsor(true);
              e.stopPropagation();
            }}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Xem chi tiết
          </button>
        </td>
      </tr>

      <tr>
        <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
          4
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          Số tiền đã chi
        </td>
        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          {item.totalExpense}
        </td>

        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
          <button>
            <button
              onClick={(e) => {
                setStatisticExpense(true);
                e.stopPropagation();
              }}
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Xem chi tiết
            </button>
          </button>
        </td>
      </tr>
      <If isTrue={statisticSponsor}>
        <button
          onClick={() => setStatisticSponsor(false)}
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto fixed z-20 top-0 right-10 top-5"
        >
          Đóng
        </button>
        <div className="fixed top-0 left-0">
          <MainPageSponsor sDate={startDate} eDate={endDate}></MainPageSponsor>
        </div>
      </If>

      <If isTrue={statisticRevenue}>
        <button
          onClick={() => setStatisticRevenue(false)}
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto fixed z-20 top-0 right-10 top-5"
        >
          Đóng
        </button>
        <div className="fixed top-0 left-0">
          <MainPageRevenue sDate={startDate} eDate={endDate}></MainPageRevenue>
        </div>
      </If>

      <If isTrue={statisticExpense}>
        <button
          onClick={() => setStatisticExpense(false)}
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto fixed z-20 top-0 right-10 top-5"
        >
          Đóng
        </button>
        <div className="fixed top-0 left-0">
          <MainPageExpense sDate={startDate} eDate={endDate}></MainPageExpense>
        </div>
      </If>
    </tbody>
  );
}
