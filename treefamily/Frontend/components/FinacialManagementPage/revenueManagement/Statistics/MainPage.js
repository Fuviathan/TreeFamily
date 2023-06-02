import BaseTemplate from "../../../BaseTemplate";
import { If, For } from "react-haiku";
import { useState } from "react";
import useSWR from 'swr'
import StatisticsTable from "./StatisticsTable";

export default function MainPage() {
    const [filterYear, setFilterYear] = useState("2023");
    const changeFilterHandler = (event) => {
        setFilterYear(event.target.value);
    };
    const { data: yearDatas, error } = useSWR(
        "http://localhost:8080/revenue-management/get-all"
    );
    if (!yearDatas) {
        return <div className="flex flex-col mt-8 overflow-y-scroll h-80vh"></div>
    }
    const abcd = yearDatas.map(a => a.year)
    const year = [...new Set(abcd)]
    return (
        <>
            <BaseTemplate>
                <div className="h-full py-4 bg-white">
                    {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="flex sm:flex-auto">
                                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                                    Báo cáo thu năm:
                                </h1>
                                <div className="ml-4">
                                    <select
                                        // id={props.name}
                                        // name={props.name}
                                        // autoComplete={props.name}
                                        onChange={changeFilterHandler}
                                        className="block w-full p-2 font-semibold text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    >
                                        <For each={year} render={(item, index) =>
                                            <option>{item}</option>
                                        } />
                                    </select>
                                </div>
                            </div>
                        </div>
                        <StatisticsTable filterYear={filterYear}/>
                    </div>
                </div>
            </BaseTemplate>
        </>
    );
}
