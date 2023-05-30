import BaseTemplate from "../../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import TableOfASingleCategory from "./TableOfASingleCategory";
import useSWR from "swr";
import AddItemInCategory from "./Modal/AddItemInCategory";
import SelectInput from "../../../UI/SelectInput";

export default function MainPage({ pid }) {
  const { data, error } = useSWR(
    "http://localhost:8080/revenue-management/get-all"
  );
  const miniData = data.filter((object) => {
    return (object.id = { pid });
  });
  const year = miniData[0]?.year;
  const [addNewRevenue, setAddNewRevenue] = useState(false);
  // Lọc Thành viên đã đóng và chưa đóng
  const [filterMember, setFilterMember] = useState("Tất cả");
  // Hàm thay dổi trạng thái khi click lực chọn
  const changeFilterHandler = (event) => {
    setFilterMember(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                  Danh sách các khoản thu năm {year}
                </h1>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                {/* <button
                  onClick={() => setAddNewRevenue(true)}
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Thêm khoản thu
                </button> */}

                <div className="mt-2">
                  <select
                    // id={props.name}
                    // name={props.name}
                    // autoComplete={props.name}
                    onChange={changeFilterHandler}
                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Tất cả</option>
                    <option>Chưa Đóng</option>
                    <option>Đã đóng</option>
                  </select>
                </div>
              </div>
            </div>
            <TableOfASingleCategory pid={pid} filterMember={filterMember} />
          </div>
        </div>
        <If isTrue={addNewRevenue}>
          <AddItemInCategory
            onClose={() => setAddNewRevenue(false)}
            isVisible={addNewRevenue}
            year={year}
            id={pid}
          />
        </If>
      </BaseTemplate>
    </>
  );
}
