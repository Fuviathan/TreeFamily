import React, { Fragment, useState } from "react";
import { If } from "react-haiku";

import { useForm, FormProvider } from "react-hook-form";
import Input from "./UI/Input";
import SelectInput from "./UI/SelectInput";
import SelectInputFamily from "./UI/SelectInputFamily";
import CheckBoxInput from "./UI/CheckBoxInput";


// Demo nhập chọn thông tin bố mẹ gửi id form
const DUMMY_DATA = [
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
export default function AddMember() {

  const method = useForm();

  const [isCheckedMarital, setIsCheckedMarital] = useState("single");

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

  return (
    <Fragment>
      <div className="fixed h-screen w-full top-0 bg-slate-200 fixed bg-gray-700"></div>

      <FormProvider {...method}>
        <form
          className="flex flex-col items-center py-4 max-w-3xl border-solid border-2 border-slate-300 mt-16 mx-auto  z-20 relative bg-white h-80vh"
          onSubmit={method.handleSubmit(onSubmit)}
        >
          <div className="space-y-12  overflow-y-scroll px-10 w-full">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Thông tin cá nhân
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Thành viên nhập thông tin của bản thân
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  {...{
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
                    className: "sm:col-span-1",
                    name: "gender",
                    title: "Giới tính",
                    dataOption: [{ value: "Nam" }, { value: "Nữ" }],
                  }}
                ></SelectInput>

                <SelectInput
                  {...{
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
                    className: "sm:col-span-3",
                    title: "Ngày sinh",
                    type: "date",
                    name: "birthDay",
                    pattern:
                      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                    message: "Vui lòng nhập đúng định dạng ngày sinh",
                  }}
                ></Input>

                <Input
                  {...{
                    className: "sm:col-span-3",
                    title: "Số điện thoại",
                    type: "tel",
                    name: "tel",
                    pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    minLength: 10,
                    message: "Vui lòng nhập đúng định dạng số điện thoại",
                  }}
                ></Input>

                <SelectInput
                  {...{
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
                      className: "sm:col-span-3",
                      title: "Nhập tên Nghề",
                      name: "job",
                      type: "text",
                    }}
                  ></Input>
                </If>

                <If isTrue={isCheckedJob === "Học Sinh"}>
                  <SelectInput
                    {...{
                      className: "sm:col-span-3",
                      title: "Học Vấn",
                      name: "education",
                      dataOption: [
                        { value: "Khá" },
                        { value: "Giỏi" },
                        { value: "Yếu" },
                        { value: "Trung bình" },
                      ],
                    }}
                  ></SelectInput>
                </If>

                <div className="sm:col-span-4"></div>

                <SelectInputFamily
                  {...{
                    className: "sm:col-span-3",
                    name: "fatherID",
                    title: "Họ tên cha",
                    dataOption: DUMMY_DATA,
                  }}
                ></SelectInputFamily>

                <SelectInputFamily
                  {...{
                    className: "sm:col-span-3",
                    name: "motherID",
                    title: "Họ tên mẹ",
                    dataOption: DUMMY_DATA,
                  }}
                ></SelectInputFamily>

                <fieldset className="sm:col-span-6 ">
                  <div className="mt-6 space-x-40 flex">
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Tình trạng hôn nhân
                    </legend>
                    <CheckBoxInput
                      {...{
                        className: "flex items-center gap-x-3",
                        title: "Độc thân",
                        type: "radio",
                        name: "single",
                        checked: isCheckedMarital === "single",
                        onChange: handleChangeMarital,
                      }}
                    ></CheckBoxInput>
                    <CheckBoxInput
                      {...{
                        className: "flex items-center gap-x-3",
                        title: "Đã kết hôn",
                        type: "radio",
                        name: "married",
                        checked: isCheckedMarital === "married",
                        onChange: handleChangeMarital,
                      }}
                    ></CheckBoxInput>
                  </div>
                </fieldset>

                <If isTrue={isCheckedMarital === "married"}>
                  <SelectInputFamily
                    {...{
                      className: "sm:col-span-3",
                      name: "partnerId",
                      title: "Họ tên vợ/chồng",
                      dataOption: DUMMY_DATA,
                    }}
                  ></SelectInputFamily>
                </If>

                <CheckBoxInput
                  {...{
                    className: "sm:col-span-4 flex  gap-10",
                    title: "Trạng thái",
                    type: "checkbox",
                    name: "status",
                    checked: isCheckedStatus,
                    onChange: handleCheckboxChangeStatus,
                  }}
                ></CheckBoxInput>

                <If isTrue={isCheckedStatus}>
                  <>
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Ngày mất",
                        type: "date",
                        name: "deadthDate",
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Nơi mất",
                        type: "text",
                        name: "deadthAdress",
                      }}
                    ></Input>
                  </>
                </If>

                <div className="sm:col-span-4 mt-6">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Thông tin tài khoản đăng nhập
                  </h2>
                </div>

                <Input
                  {...{
                    className: "sm:col-span-3",
                    title: "Tên đăng nhập",
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

          <div className="mt-6 flex items-center justify-end self-end gap-x-6 mr-20">
            <button
              type="button"
              // className="text-sm font-semibold leading-6 text-gray-900 bg-indigo-600 rounded-md"
              className="rounded-md bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </FormProvider>
    </Fragment>

  );
}
