import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import StatisticsTable from "./StatisticsTable";
export default function StatisticsPdfPrint({ pdf, item, startDate, endDate }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  return (
    <div>
      <div className="bg-gray-500 bg-opacity-75 top-0 left-0 fixed w-screen h-screen z-30"></div>
      <div
        ref={componentRef}
        className="bg-white absolute top-0 z-40"
        style={{ width: "100%", height: "100%" }}
      >
        <h1 className="pt-2 flex justify-center text-3xl font-semibold">
          Báo cáo thu chi
        </h1>
        <div className="flex justify-center gap-2 text-2xl">
          Báo cáo thu chi từ
          <span> {startDate}</span>
          đến
          <span>{endDate}</span>
        </div>

        {/* table */}

        {/* <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8"> */}
        {/* <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 "> */}
        <div className="mx-10 mt-4 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
          <table className=" min-w-full divide-y divide-gray-300 ">
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
              </tr>
            </thead>
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
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 "></td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  Số tiền còn lại
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.remainingBalance} VNĐ
                </td>
              </tr>
            </tfoot>
          </table>
          {/* </div> */}
        </div>
      </div>
      <button
        type="button"
        onClick={handlePrint}
        className="fixed z-50 right-32 bottom-60 inline-flex items-center justify-center px-4 py-2 ml-12 text-base font-medium text-black bg-red-400 border border-black rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
      >
        Xuất file PDF
      </button>
      <button
        type="button"
        onClick={() => {
          pdf(false);
        }}
        className="fixed z-50 right-72 bottom-60 inline-flex items-center justify-center px-4 py-2 ml-12 text-base font-medium text-black bg-red-400 border border-black rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
      >
        Hủy
      </button>
    </div>
  );
}
