import BaseTemplate from "../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import Link from 'next/link'
import AnnualRevenuesTable from "./MainPage/AnnualRevenuesTable"
import { useSession } from "next-auth/react";
import AddRevenue from "./MainPage/Modal/AddRevenue"

export default function MainPage() {
    const { data: session, status } = useSession()
    async function onSubmit() {
        const endpoint = "http://localhost:8080/revenue-management/create";
        const options = {
            method: "GET",
        };
        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            alert("Thêm khoản thu thành công");
        } else {
            const result = await response.json();
            alert(result.message);
        }
    }
    const [addNewRevenue, setAddNewRevenue] = useState(false)
    return (
        <>
            <BaseTemplate>
                <div className="h-full py-4 bg-white">
                    {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="flex sm:flex-auto">
                                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                                    Quản lý các khoản thu
                                </h1>

                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <Link
                                    href="/financialManagement/revenueManagement/revenueStatistics"
                                    type="button"
                                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Báo cáo thu
                                </Link>
                            </div>
                            <If isTrue={session?.user.createFinancial}>
                                <div className="mt-4 sm:mt-0 sm:ml-8 sm:flex-none">
                                    <button
                                        onClick={() => onSubmit()}
                                        type="button"
                                        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Thêm mức thu hằng năm
                                    </button>
                                </div>
                            </If>
                        </div>
                        <If isTrue={session?.user.viewFinancial}>
                            <AnnualRevenuesTable permission={session}/>
                        </If>
                    </div>
                </div>
                <If isTrue={addNewRevenue}>
                    <AddRevenue
                        onClose={() => setAddNewRevenue(false)}
                        isVisible={addNewRevenue}
                    />
                </If>
            </BaseTemplate>
        </>
    );
}
