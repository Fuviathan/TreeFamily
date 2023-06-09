import UserTable from "./UserTable";
import BaseTemplate from "../../BaseTemplate";
import SearchBar from "./SearchBar";
import { If } from "react-haiku";
import { useState } from "react";
import AddMember from "./Modal/AddMember";
import Link from "next/link";
import { useSession } from "next-auth/react"

export default function MainPage() {
  const { data: session, status } = useSession()
  const [nameSearch, setNameSearch] = useState("");
  const [addMember, setAddMember] = useState(false);
  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                  Danh sách thông tin
                </h1>

                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 ml-12 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  <Link href="/displayTypeTree">Xem dạng cây</Link>
                </button>
              </div>

              <SearchBar setNameSearch={setNameSearch}></SearchBar>

              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  <Link href="/memberStatistics">Xem báo cáo</Link>
                </button>
              </div>
              <If isTrue={session?.user.createMembers}>
                <div className="mt-4 sm:mt-0 sm:ml-8 sm:flex-none">
                  <button
                    onClick={() => setAddMember(true)}
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Thêm thành viên
                  </button>
                </div>
              </If>
            </div>
            <UserTable nameSearch={nameSearch} permission={session} />
          </div>
        </div>
        <If isTrue={addMember}>
          <AddMember
            onClose={() => setAddMember(false)}
            isVisible={addMember}
          />
        </If>
      </BaseTemplate>
    </>
  );
}
