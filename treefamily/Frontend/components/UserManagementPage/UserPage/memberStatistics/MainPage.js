import BaseTemplate from "../../../BaseTemplate";
import { If, For } from "react-haiku";
import { useState } from "react";
import ChartGeneration from "./ChartGeneration";
import useSWR from "swr";

// import StatisticsTable from "./StatisticsTable";

export default function MainPage() {
  const { data, error } = useSWR(`http://localhost:8080/member/statistics`);

  if (!data) {
    return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>;
  }

  // console.log(yearDatas.revenueDetails);
  // if (yearDatas?.revenueDetails.length > 0) {
  //   const abcd = yearDatas?.revenueDetails.map((a) => a.year);
  //   const year = [...new Set(abcd)];
  // }

  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900 pt-2">
                  Thống kê
                </h1>
              </div>
            </div>
            {/* <StatisticsTable startDate={startDate} endDate={endDate} /> */}
            {/* Trang thống kê */}
            <div>
              <div class="container mx-auto p-4 sm:px-6 lg:px-8 h-1/4">
                <div class="sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-4 bg-white rounded-lg p-4 shadow">
                  <div class="text-center border rounded-lg p-2  py-8">
                    <h3 class="text-lg font-medium">Số thành viên nam</h3>
                    <span class="text-2xl font-bold">{data.numberOfMale}</span>
                  </div>
                  <div class="text-center border rounded-lg p-2 py-8">
                    <h3 class="text-lg font-medium">Số thành viên nữ</h3>
                    <span class="text-2xl font-bold">
                      {data.numberOfFemale}
                    </span>
                  </div>
                  <div class="text-center border rounded-lg p-2 py-8">
                    <h3 class="text-lg font-medium">
                      Số thành viên từ 18 - 60 tuổi
                    </h3>
                    <span class="text-2xl font-bold">{data.numberOfMale}</span>
                  </div>
                </div>

                <div class="mt-4 grid grid-cols-3 gap-4 bg-white rounded-lg p-4 shadow h-3/4">
                  <div class="border rounded-lg p-2 sm:col-span-2">
                    <h3 class="text-lg font-medium mb-2">Sơ đồ thống kê</h3>
                    <ChartGeneration
                      generationDTOS={data.generationDTOS}
                    ></ChartGeneration>
                  </div>
                  <div class="border rounded-lg p-2 ">
                    <div class="text-center border rounded-lg p-2 py-8 mb-2">
                      <h3 class="text-lg font-medium mb-2 text-center">
                        Tổng thành viên
                      </h3>
                      <span class="text-2xl font-bold">{data.totalMember}</span>
                    </div>
                    <div class="text-center border rounded-lg p-2 py-8 mb-2">
                      <h3 class="text-lg font-medium mb-2 text-center">
                        Tuổi thọ trung bình của nam giới
                      </h3>
                      <span class="text-2xl font-bold">
                        {data.averageAgeOfMale}
                      </span>
                    </div>
                    <div class="text-center border rounded-lg p-2 py-8 mb-2">
                      <h3 class="text-lg font-medium mb-2 text-center">
                        Tuổi thọ trung bình của nữ giới
                      </h3>
                      <span class="text-2xl font-bold ">
                        {data.averageAgeOfFemale}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseTemplate>
    </>
  );
}
