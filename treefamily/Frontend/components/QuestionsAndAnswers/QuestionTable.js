import React from "react";
import { For, If } from "react-haiku";
import useSWR from "swr";
import QuestionItem from "./QuestionItem";

export default function QuestionTable({ permission }) {
  const isConditionalMet1 = permission?.user.role !== "Trưởng họ"
  const isConditionalMet2 = permission?.user.role === "Trưởng họ"
  const { data, error } = useSWR(
    isConditionalMet2 ? "http://localhost:8080/question/get-all" : null
  );
  const { data: userData, error: userError } = useSWR(
    isConditionalMet1 ? `http://localhost:8080/question/get-all-for-a-member/${permission?.user.memberId}` : null
  )
  if (!data && isConditionalMet2) {
    return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>;
  }
  if (!userData && isConditionalMet1) {
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
                  Tiêu đề câu hỏi
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Ngày gửi
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                  Trạng thái
                </th>
                <th
                  scope="col"
                  className="px-3 w-1/12 py-3.5 text-left text-base font-semibold text-gray-900"
                >
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <If isTrue={permission?.user.role === "Trưởng họ"}>
                <For
                  each={data}
                  render={(item, index) => (
                    <QuestionItem item={item} index={index} permission={permission} />
                  )}
                />
              </If>
              <If isTrue={permission?.user.role !== "Trưởng họ"}>
                <For
                  each={userData}
                  render={(item, index) => (
                    <QuestionItem item={item} index={index} permission={permission} />
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
