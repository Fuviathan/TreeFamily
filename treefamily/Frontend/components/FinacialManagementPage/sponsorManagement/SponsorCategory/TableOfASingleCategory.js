import React from "react";
import { For, If } from "react-haiku";
import useSWR from "swr";
import ItemInCategory from "./ItemInCategory";

export default function TableOfASingleCategory({ pid, permission }) {
  const { data, error } = useSWR(
    `http://localhost:8080/sponsorship-detail/get-all?financialSponsorshipId=${pid}`
  );

  let miniData = data?.sponsorsipDetailList;

  // if (!Array.isArray(miniData)) {
  //   return (
  //     <div className="flex flex-col mt-8 overflow-y-scroll h-80vh">
  //       {/* <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8"> */}
  //       <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
  //         <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
  //           <table className="min-w-full divide-y divide-gray-300 ">
  //             <thead className="sticky top-0 z-20 rounded-t-lg bg-gray-50">
  //               <tr className="">
  //                 <th
  //                   scope="col"
  //                   className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6"
  //                 >
  //                   STT
  //                 </th>
  //                 <th
  //                   scope="col"
  //                   className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
  //                 >
  //                   Người đóng
  //                 </th>
  //                 <th
  //                   scope="col"
  //                   className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
  //                 >
  //                   Số tiền đóng
  //                 </th>

  //                 <th
  //                   scope="col"
  //                   className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
  //                 >
  //                   Ngày đóng
  //                 </th>

  //                 <th
  //                   scope="col"
  //                   className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
  //                 >
  //                   Trạng thái
  //                 </th>

  //                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
  //                   <span className="sr-only">Edit</span>
  //                 </th>
  //               </tr>
  //             </thead>
  //             <tbody className="bg-white divide-y divide-gray-200 "></tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
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
                  Nhà tài trợ
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Loại tài trợ
                </th>

                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Tên tổ chức
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Ngày đóng góp
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Chú thích
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Số tiền tài trợ
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <If isTrue={miniData}>
                <For
                  each={miniData}
                  render={(item, index) => (
                    <ItemInCategory item={item} index={index} permission={permission}/>
                  )}
                />
              </If>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
