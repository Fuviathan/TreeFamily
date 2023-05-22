import React from "react";
import BaseTemplate from "../components/BaseTemplate";
import { For } from "react-haiku";
import DetailItem from "../components/DetailPage/DetailItem";

export default function test() {
  return (
    <BaseTemplate>
      <div className="h-full px-6 py-4 bg-white">
        <div>
          <h3 className="text-xl font-bold leading-6 text-gray-900 uppercase">
            Thông tin cá nhân
          </h3>
        </div>
        <div className='mt-4 overflow-scroll bg-gray-300 rounded-lg shadow-lg h-[90vh]'>
          <div className="px-2 border-t border-gray-200">
            <dl className="sm:divide-y sm:divide-gray-200">
              <DetailItem dt={"Họ tên"} dd={"Margot Foster"} />
              <DetailItem dt={"Giới tính"} dd={"Margot Foster"} />
              <DetailItem dt={"Ngày Sinh"} dd={"Margot Foster"} />
              <DetailItem dt={"Số ĐT"} dd={"Margot Foster"} />
              <DetailItem dt={"Nghề nghiệp"} dd={"Margot Foster"} />
              <DetailItem dt={"Học vấn"} dd={"Margot Foster"} />
              <DetailItem dt={"Họ tên cha"} dd={"Margot Foster"} />
              <DetailItem dt={"Họ tên mẹ"} dd={"Margot Foster"} />
              <DetailItem dt={"Tình trạng hôn nhân"} dd={"Margot Foster"} />
              <DetailItem dt={"Tên vợ/chồng"} dd={"Margot Foster"} />
              <DetailItem dt={"Vai trò"} dd={"Margot Foster"} />
              <DetailItem dt={"Trạng thái"} dd={"Margot Foster"} />
              <DetailItem dt={"Nơi an táng"} dd={"Margot Foster"} />
              <DetailItem dt={"Ngày mất"} dd={"Margot Foster"} />
            </dl>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}
