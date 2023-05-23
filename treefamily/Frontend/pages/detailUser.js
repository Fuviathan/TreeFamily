import React from "react";
import BaseTemplate from "../components/BaseTemplate";
import { useSession } from "next-auth/react";
import DetailCard from "../components/DetailPage/DetailCard";

export default function detailUser() {
  const { data: userData, error } = useSession();
  return (
    <BaseTemplate>
      <div className="h-full px-6 py-4 bg-gray-200">
        <div>
          <h3 className="text-xl font-bold leading-6 text-gray-900 uppercase">
            Thông tin cá nhân
          </h3>
        </div>
        <div className='inset-0 mt-8 overflow-auto bg-white rounded-lg shadow-lg h-85vh'>
          <DetailCard person={userData?.user} />
        </div>
      </div>
    </BaseTemplate >
  );
}
