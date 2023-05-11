import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Input from "../../UI/Input";
import SelectInput from "../../UI/SelectInput";
import SelectInputFamily from "../../UI/SelectInputFamily";
import CheckBoxInput from "../../UI/CheckBoxInput";

// Demo nhập chọn thông tin bố mẹ gửi id form
const DUMMY_DATA1 = [
  {
    id: 1,
    name: "trung",
  },
  {
    id: 4,
    name: "anh",
  },
  {
    id: 2,
    name: "nga",
  },
  {
    id: 3,
    name: "hưng",
  },
  {
    id: 5,
    name: "híu",
  },
];

const DUMMY_DATA = {
  id: 1,
  name: "Trung vu",
  gender: "Nữ",
  role: "Trưởng họ",
  tel: "12321421312",
  birthDate: "2002-05-05",
  job: "Học Sinh",
  education: "Giỏi",
  fatherID: "2",
  motherID: "3",
  single: "",
  married: "married",
  partnerId: "4",
  status: true,
  deadthAdress: "Sài Gòn",
  deaththDate: "2100-01-01",
  username: "trungvu",
  password: "trung12124",
};
export default function UpdateMember({ isVisible, onClose }) {
  const method = useForm();

  const [isCheckedMarital, setIsCheckedMarital] = useState("single");
  const [isCheckedStatus, setIsCheckedStatus] = useState(false);
  const [isCheckedJob, setIsCheckedJob] = useState("Nông Dân");

  const handleChangeMarital = (event) => {
    setIsCheckedMarital(event.target.value);
  };

  const handleCheckboxChangeStatus = (event) => {
    setIsCheckedStatus(event.target.checked);
  };

  const changeJob = (event) => {
    setIsCheckedJob(event.target.value);
  };

  const onSubmit = (data) => console.log(data);
  if (!isVisible) return <></>
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-20"
      open={isVisible}
      onClose={onClose}
    >
      <div className="fixed inset-0 flex items-end justify-center px-4 pt-4 pb-20 text-center bg-gray-500 bg-opacity-75 sm:block sm:p-0">
        <div className="h-[90vh] fixed inset-0 z-20">
          <FormProvider {...method}>
            <form
              className="fixed inset-0 z-20 flex flex-col items-center max-w-3xl py-4 mx-auto my-16 bg-white border-2 border-solid border-slate-300"
              onSubmit={method.handleSubmit(onSubmit)}
            >
              <div className="w-full px-10 space-y-12 overflow-y-scroll">
                <div className="pb-12 border-gray-900/10">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Chỉnh Sửa thông tin thành viên
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập các thông tin cần sửa
                  </p>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      {...{
                        data: DUMMY_DATA.name,
                        className: "sm:col-span-3",
                        title: "Họ Tên",
                        type: "text",
                        name: "name",
                        minLength: 6,
                        pattern:
                          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
                        message: "Vui lòng nhập đúng định dạng tên",
                      }}
                    ></Input>

                    <SelectInput
                      {...{
                        data: DUMMY_DATA.gender,
                        className: "sm:col-span-1",
                        name: "gender",
                        title: "Giới tính",
                        dataOption: [{ value: "Nam" }, { value: "Nữ" }],
                      }}
                    ></SelectInput>

                    <SelectInput
                      {...{
                        data: DUMMY_DATA.role,
                        className: "sm:col-span-2",
                        name: "role",
                        title: "Vai trò",
                        dataOption: [
                          { value: "Trưởng họ" },
                          { value: "Thành viên" },
                        ],
                      }}
                    ></SelectInput>

                    <Input
                      {...{
                        data: DUMMY_DATA.birthDate,
                        className: "sm:col-span-3",
                        title: "Ngày sinh",
                        type: "date",
                        name: "birthDay",
                        // pattern:
                        //   /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                        // message: "Vui lòng nhập đúng định dạng ngày sinh",
                      }}
                    ></Input>

                    <Input
                      {...{
                        data: DUMMY_DATA.tel,
                        className: "sm:col-span-3",
                        title: "Số điện thoại",
                        type: "tel",
                        name: "tel",
                        pattern:
                          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        minLength: 10,
                        message: "Vui lòng nhập đúng định dạng số điện thoại",
                      }}
                    ></Input>

                    <SelectInput
                      {...{
                        data: DUMMY_DATA.job,
                        className: "sm:col-span-3",
                        title: "Nghề nghiệp",
                        dataOption: [
                          { value: "Giáo viên" },
                          { value: "Học Sinh" },
                          { value: "Bác sĩ" },
                          { value: "Nông Dân" },
                          { value: "Khác*" },
                        ],
                        name: "job",
                        // value1: { isCheckedJob },
                        onChange: changeJob,
                      }}
                    ></SelectInput>

                    <If isTrue={isCheckedJob === "Khác*"}>
                      <Input
                        {...{
                          data: DUMMY_DATA.job,
                          className: "sm:col-span-3",
                          title: "Nhập tên Nghề",
                          name: "job",
                          type: "text",
                        }}
                      ></Input>
                    </If>

                    <SelectInput
                      {...{
                        data: DUMMY_DATA.education,
                        className: "sm:col-span-3",
                        title: "Học Vấn",
                        name: "education",
                        dataOption: [
                          { value: "Chọn" },
                          { value: "Khá" },
                          { value: "Giỏi" },
                          { value: "Yếu" },
                          { value: "Trung bình" },
                        ],
                      }}
                    ></SelectInput>

                    <div className="sm:col-span-4"></div>

                    <SelectInputFamily
                      {...{
                        data: DUMMY_DATA.fatherID,
                        className: "sm:col-span-3",
                        name: "fatherID",
                        title: "Họ tên cha",
                        dataOption: DUMMY_DATA1,
                      }}
                    ></SelectInputFamily>

                    <SelectInputFamily
                      {...{
                        data: DUMMY_DATA.motherID,
                        className: "sm:col-span-3",
                        name: "motherID",
                        title: "Họ tên mẹ",
                        dataOption: DUMMY_DATA1,
                      }}
                    ></SelectInputFamily>

                    <fieldset className="sm:col-span-6 ">
                      <div className="flex mt-6 space-x-40">
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Tình trạng hôn nhân
                        </legend>
                        <div className="flex items-center gap-x-3 ">
                          <input
                            id="single"
                            name="marital-status"
                            type="radio"
                            value="single"
                            {...method.register("checkMarital")}
                            defaultChecked={DUMMY_DATA.single === "single"}
                            onChange={handleChangeMarital}
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="single"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Độc thân
                          </label>
                        </div>

                        <div className="flex items-center gap-x-3">
                          <input
                            id="married"
                            name="marital-status"
                            type="radio"
                            value="married"
                            {...method.register("checkMarital")}
                            // checked={isCheckedMarital === "married"}
                            defaultChecked={DUMMY_DATA.married === "married"}
                            onChange={handleChangeMarital}
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="married"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Đã kết hôn
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <If isTrue={DUMMY_DATA.married === "married"}>
                      <SelectInputFamily
                        {...{
                          data: DUMMY_DATA.partnerId,
                          className: "sm:col-span-3",
                          name: "partnerId",
                          title: "Họ tên vợ/chồng",
                          dataOption: DUMMY_DATA1,
                        }}
                      ></SelectInputFamily>
                    </If>
                    {/* <div className="sm:col-span-4">Trạng thái</div> */}
                    <div className="flex sm:col-span-4">
                      <div className="flex pr-8 text-sm leading-6">
                        <label
                          htmlFor="status"
                          className="font-medium text-gray-900"
                        >
                          Trạng thái:
                        </label>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex items-center h-6">
                          <input
                            id="status"
                            name="status"
                            type="checkbox"
                            defaultChecked={DUMMY_DATA.status}
                            {...method.register("status")}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            onChange={handleCheckboxChangeStatus}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="status"
                            className="font-medium text-gray-900"
                          >
                            Đã mất
                          </label>
                        </div>
                      </div>
                    </div>

                    <Input
                      {...{
                        data: DUMMY_DATA.deaththDate,
                        className: "sm:col-span-3",
                        title: "Ngày mất",
                        type: "date",
                        name: "deadthDate",
                      }}
                    ></Input>

                    <Input
                      {...{
                        data: DUMMY_DATA.deadthAdress,
                        className: "sm:col-span-3",
                        title: "Nơi mất",
                        type: "text",
                        name: "deadthAdress",
                      }}
                    ></Input>

                    <div className="mt-6 sm:col-span-4">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Thông tin tài khoản đăng nhập
                      </h2>
                    </div>

                    <Input
                      {...{
                        data: DUMMY_DATA.username,
                        disabled: "disabled",
                        className: "sm:col-span-3",
                        title: "Tên đăng nhập (chỉ xem không thể sửa)",
                        type: "text",
                        name: "userName",
                        minLength: 5,
                        pattern:
                          /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                        message: "Vui lòng không chứa ký tự đặc biệt",
                      }}
                    ></Input>

                    <Input
                      {...{
                        data: DUMMY_DATA.password,
                        className: "sm:col-span-3",
                        title: "Mật khẩu",
                        type: "password",
                        name: "password",
                        minLength: 8,
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                          " Mật khẩu có độ dài 8 ký tự chứa ít nhất 1 chữ và 1 số",
                      }}
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="px-3 py-2 text-sm font-semibold text-red-500 bg-white border border-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Lưu
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Dialog>
  );
}
