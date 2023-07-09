import React, { useState } from "react";
import BaseTemplate from "../components/BaseTemplate";
import { useSession } from "next-auth/react";
import DetailCard from "../components/DetailPage/DetailCard";
import useSWR from "swr"
import UpdateUserDetail from "../components/DetailPage/Modal/UpdateUserDetail";
import { If } from "react-haiku";

export default function detailUser() {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const { data: userData, error } = useSession();
  const { data: user, error: userError } = useSWR(`http://localhost:8080/member/get-by-id-member?id=${userData?.user.memberId}`)
  if (!user || !userData) {
    return (
      <BaseTemplate>
        <div className="h-full px-6 py-4 bg-gray-200">
          <div>
            <h3 className="mt-4 text-xl font-bold leading-6 text-gray-900 uppercase">
              Thông tin cá nhân
            </h3>
          </div>
          <div className='inset-0 mt-8 overflow-auto bg-white rounded-lg shadow-lg h-85vh'>
          </div>
        </div>
      </BaseTemplate >
    );
  }
  if (user) {
    return (
      <>
        <BaseTemplate>
          <div className="h-full px-6 py-4 bg-gray-200">
            <div className="flex">
              <h3 className="mt-2 text-xl font-bold leading-6 text-gray-900 uppercase">
                Thông tin cá nhân
              </h3>
              <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-none">
                <button
                  onClick={() => setShowUpdateModal(true)}
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Sửa thông tin cá nhân
                </button>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-none">
                <button
                  // onClick={() => setAddNewGuest(true)}
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
            <div className='inset-0 mt-8 overflow-auto bg-white rounded-lg shadow-lg h-85vh'>
              <DetailCard person={user} account={userData} />
            </div>
          </div>
        </BaseTemplate >
        <If isTrue={showUpdateModal}>
          <UpdateUserDetail isVisible={showUpdateModal} onClose={() => setShowUpdateModal(false)} person={user} />
        </If>
      </>
    );
  }

}
