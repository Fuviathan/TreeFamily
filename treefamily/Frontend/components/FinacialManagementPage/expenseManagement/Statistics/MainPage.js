import BaseTemplate from "../../../BaseTemplate";
import { If, For } from "react-haiku";
import { useState } from "react";
import useSWR from "swr";
import StatisticsTable from "./StatisticsTable";

export default function MainPage() {
  // Khởi tạo năm bắt đầu trước năm hiện tại 2 năm
  const date = new Date();
  date.setFullYear(date.getFullYear() - 2);
  const lastDate = date.toISOString().split("T")[0];
  // Ngày hiện tại
  const currentDate = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(lastDate);
  const [endDate, setEndDate] = useState(currentDate);

  // Xử lý sự kiện thay đổi ngày
  const changeFilterStartDateHandler = (event) => {
    setStartDate(event.target.value);
  };
  const changeFilterEndDateHandler = (event) => {
    setEndDate(event.target.value);
  };
  // const { data: yearDatas, error } = useSWR(
  //     "http://localhost:8080/revenue-management/get-all"
  // );
  // if (!yearDatas) {
  //     return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>
  // }
  // const abcd = yearDatas.map(a => a.year)
  // const year = [...new Set(abcd)]
  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-3 text-xl font-semibold text-gray-900">
                  Báo cáo chi
                </h1>
                <div className="flex ml-4">
                  <div className="flex self-center mt-2  font-medium ">
                    {" "}
                    Từ ngày
                  </div>

                  <div className="mt-2 px-2">
                    <input
                      onChange={changeFilterStartDateHandler}
                      type="date"
                      name="start-date"
                      value={startDate}
                      id="start-date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                    />
                  </div>
                  <div className="flex self-center mt-2  font-medium  px-2">
                    {" "}
                    Đến ngày
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={changeFilterEndDateHandler}
                      type="date"
                      value={endDate}
                      name="end-date"
                      id="end-date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <StatisticsTable startDate={startDate} endDate={endDate} />
          </div>
        </div>
      </BaseTemplate>
    </>
  );
}
