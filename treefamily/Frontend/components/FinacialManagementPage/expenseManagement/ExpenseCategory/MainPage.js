import BaseTemplate from "../../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import TableOfASingleCategory from "./TableOfASingleCategory";
import useSWR from "swr";
import AddItemInCategory from "./Modal/AddItemInCategory";

export default function MainPage({ pid }) {
  const { data, error } = useSWR(
    `http://localhost:8080/expense-detail/get-all?expenseManagementId=${pid}`
  );
  // const miniData = data.filter((object) => {
  //   return (object.id = { pid });
  // });

  const [addNewRevenue, setAddNewRevenue] = useState(false);

  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                  Danh sách các giao dịch
                </h1>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  onClick={() => setAddNewRevenue(true)}
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Thêm giao dịch
                </button>
              </div>
            </div>
            <TableOfASingleCategory pid={pid} />
          </div>
        </div>
        <If isTrue={addNewRevenue}>
          <AddItemInCategory
            onClose={() => setAddNewRevenue(false)}
            isVisible={addNewRevenue}
            id={pid}
          />
        </If>
      </BaseTemplate>
    </>
  );
}
