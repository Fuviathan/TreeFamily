import BaseTemplate from "../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import Link from "next/link";
import AnnualSponsorTable from "./MainPage/AnnualSponsorTable";
import AddSponSor from "./MainPage/Modal/AddSponsor";
import { useSession } from "next-auth/react";

export default function MainPage() {
  const { data: session, status } = useSession()
  console.log(session)
  const [addNewSponsor, setAddNewSponsor] = useState(false);
  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                  Danh sách đợt tài trợ
                </h1>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <Link
                  href="/financialManagement/sponsorManagement/sponsorStatistics"
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Báo cáo tài trợ
                </Link>
              </div>
              <If isTrue={session?.user.createFinancial}>
                <div className="mt-4 sm:mt-0 sm:ml-8 sm:flex-none">
                  <button
                    onClick={() => setAddNewSponsor(true)}
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Thêm đợt tài trợ
                  </button>
                </div>
              </If>
            </div>
            <If isTrue={session?.user.viewFinancial}>
              <AnnualSponsorTable permission={session}/>
            </If>
          </div>
        </div>
        <If isTrue={addNewSponsor}>
          <AddSponSor
            onClose={() => setAddNewSponsor(false)}
            isVisible={addNewSponsor}
          />
        </If>
      </BaseTemplate>
    </>
  );
}
