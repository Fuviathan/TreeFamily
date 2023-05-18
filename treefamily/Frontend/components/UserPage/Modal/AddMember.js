import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../UI/Input";
import SelectInput from "../../UI/SelectInput";
import SelectInputFamily from "../../UI/SelectInputFamily";
import useSWR from "swr";
import ComboBoxFamily from "./miniComponents/ComboBoxFamily";

export default function AddMember({ isVisible, onClose }) {
  const method = useForm({
    defaultValues: {
      status: "",
      momId: "",
      dadId: "",
    },
  });

  const [isCheckedMarital, setIsCheckedMarital] = useState("Độc thân");
  const [isCheckedStatus, setIsCheckedStatus] = useState(false);
  const [isCheckedJob, setIsCheckedJob] = useState("Nông Dân");

  const handleChangeMarital = (event) => {
    setIsCheckedMarital(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChangeStatus = (event) => {
    setIsCheckedStatus(event.target.checked);
    console.log(event.target.checked);
  };

  const changeJob = (event) => {
    setIsCheckedJob(event.target.value);
  };

  const { data, error } = useSWR("http://localhost:8080/member/get-all");

  async function onSubmit(formData) {
    if (formData.status === true) {
      formData.status = "Đã mất";
    } else {
      formData.status = "";
    }
    formData.momId = Number(formData.momId);
    formData.dadId = Number(formData.dadId);
    formData.partnerId = Number(formData.partnerId);
    console.log(formData)
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/member/create-member";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    // const a = JSON.parse(result)
    // console.log(a)
    if (response.status === 200) {
      alert("Thêm thành viên thành công");
      onClose()
    } else {
      const result = await response.json();
      alert(result.message);
    }
  }

  if (!isVisible) return <></>;
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
              className="fixed inset-0 z-20 flex flex-col items-center max-w-3xl py-4 mx-auto my-16 bg-white border-2 border-solid border-slate-300 h-80vh"
              onSubmit={method.handleSubmit(onSubmit)}
            >
              <div className="w-full px-10 space-y-12 overflow-y-scroll">
                <div className="pb-12 border-gray-900/10">
                  <Dialog.Title
                    as="h2"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    Thêm thành viên
                  </Dialog.Title>

                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    Nhập thông tin của thành viên mới
                  </div>

                  <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Họ Tên (*)",
                        type: "text",
                        name: "fullName",
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
                          { value: "Ông tổ" },
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
                        name: "dateOfBirth",
                        // pattern:
                        //   /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                        // message: "Vui lòng nhập đúng định dạng ngày sinh",
                      }}
                    ></Input>

                    <Input
                      {...{
                        className: "sm:col-span-3",
                        title: "Số điện thoại",
                        type: "tel",
                        name: "mobilePhoneNumber",
                        pattern:
                          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
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
                        name: "career",
                        // value1: { isCheckedJob },
                        onChange: changeJob,
                      }}
                    ></SelectInput>

                    <If isTrue={isCheckedJob === "Khác*"}>
                      <Input
                        {...{
                          className: "sm:col-span-3",
                          title: "Nhập tên Nghề",
                          name: "career",
                          type: "text",
                        }}
                      ></Input>
                    </If>

                    {/* <If isTrue={isCheckedJob === "Học Sinh"}> */}
                    <SelectInput
                      {...{
                        className: "sm:col-span-3",
                        title: "Bằng cấp",
                        name: "education",
                        dataOption: [
                          { value: "Tiểu học" },
                          { value: "Trung học cơ sở" },
                          { value: "Trung học phổ thông" },
                          { value: "Đại học" },
                          { value: "Trên đại học" },
                        ],
                      }}
                    ></SelectInput>
                    {/* </If> */}

                    <div className="sm:col-span-6"></div>
                    <If isTrue={!data}>
                      {/* <SelectInputFamily
                        {...{
                          className: "sm:col-span-3",
                          type: "number",
                          name: "dadId",
                          title: "Họ tên cha",
                          disabled: "disabled",
                        }}
                      ></SelectInputFamily> */}
                      <div className='sm:col-span-3'>
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Họ tên cha
                        </label>
                        <div className="mt-2">
                          <input
                            disabled
                            {...method.register("dadId")}
                            className="block w-full rounded-md border-0 py-1.5 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4"
                          />
                        </div>
                      </div>
                      {/* <SelectInputFamily
                        {...{
                          className: "sm:col-span-3",
                          type: "number",
                          name: "dadId",
                          title: "Họ tên cha",
                          disabled: "disabled",
                        }}
                      ></SelectInputFamily> */}
                      <div className='sm:col-span-3'>
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Họ tên mẹ
                        </label>
                        <div className="mt-2">
                          <input
                            disabled
                            {...method.register("momId")}
                            className="block w-full rounded-md border-0 py-1.5 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4"
                          />
                        </div>
                      </div>
                    </If>
                    <If isTrue={data}>
                      <ComboBoxFamily
                        {...{
                          title: "Họ tên cha",
                          people: data?.members,
                          className: "sm:col-span-3",
                          name: "dadId",
                        }}
                      ></ComboBoxFamily>
                      <ComboBoxFamily
                        {...{
                          title: "Họ tên mẹ",
                          people: data?.members,
                          className: "sm:col-span-3",
                          name: "momId",
                        }}
                      ></ComboBoxFamily>
                    </If>

                    {/* <If isTrue={!data}>
                      <SelectInputFamily
                        {...{
                          className: "sm:col-span-3",
                          name: "momId",
                          type: "number",
                          title: "Họ tên mẹ",
                          disabled: "disabled",
                        }}
                      ></SelectInputFamily>
                    </If> */}
                    {/* <SelectInputFamily
                      {...{
                        className: "sm:col-span-3",
                        name: "momId",
                        type: "number",
                        title: "Họ tên mẹ",
                        dataOption: data.members,
                      }}
                    ></SelectInputFamily> */}

                    <fieldset className="sm:col-span-6 ">
                      <div className="flex mt-6 space-x-40">
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Tình trạng hôn nhân
                        </legend>
                        <div className="flex items-center gap-x-3">
                          <label
                            htmlFor="single"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Độc thân
                          </label>
                          <div className="mt-2 ">
                            <input
                              id="single"
                              name="maritalStatus"
                              value="Độc thân"
                              defaultChecked="true"
                              {...method.register("maritalStatus")}
                              className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                              type="radio"
                              onChange={handleChangeMarital}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <label
                            htmlFor="married"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Đã kết hôn
                          </label>
                          <div className="mt-2 ">
                            <input
                              id="married"
                              name="maritalStatus"
                              value="Đã kết hôn"
                              {...method.register("maritalStatus")}
                              onChange={handleChangeMarital}
                              className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                              type="radio"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <If isTrue={isCheckedMarital === "Đã kết hôn"}>
                      {/* <SelectInputFamily
                        {...{
                          className: "sm:col-span-3",
                          name: "partnerId",
                          type: "number",
                          title: "Họ tên vợ/chồng",
                          dataOption: data.members,
                        }}
                      ></SelectInputFamily> */}
                      <ComboBoxFamily
                        {...{
                          title: "Họ tên vợ/chồng",
                          people: data?.members,
                          className: "sm:col-span-3",
                          name: "partnerId",
                        }}
                      ></ComboBoxFamily>
                    </If>

                    <div className="flex mt-6 space-x-40 sm:col-span-6">
                      {/* <legend className="text-sm font-semibold leading-6 text-gray-900 sm:col-span-2">
                        Trạng thái
                      </legend> */}
                      {/* <CheckBoxInput
                        {...{
                          className: "pl-16 flex items-center gap-x-5",
                          title: "Đã mất",
                          type: "checkbox",
                          name: "status",
                          value: isCheckedStatus ? "Đã mất" : "còn sống",
                          checked: isCheckedStatus,
                          defaultvalue: "",
                          onChange: handleCheckboxChangeStatus,
                        }}
                      ></CheckBoxInput> */}

                      <div className="flex items-center ">
                        <label
                          htmlFor="statusid"
                          className="block mr-48 text-sm font-medium leading-6 text-gray-900"
                        >
                          Trạng thái
                        </label>
                        <div className="mt-1">
                          <input
                            type="checkbox"
                            id="statusid"
                            checked={isCheckedStatus}
                            // value={isCheckedStatus ? "Đã mất" : ""}
                            {...method.register("status")}
                            onChange={handleCheckboxChangeStatus}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                          />
                        </div>
                        <label
                          htmlFor="statusid"
                          className="block pl-4 text-sm font-medium leading-6 text-gray-900"
                        >
                          Đã mất
                        </label>
                      </div>
                    </div>

                    <If isTrue={isCheckedStatus}>
                      <>
                        <Input
                          {...{
                            className: "sm:col-span-3",
                            title: "Ngày mất",
                            type: "date",
                            name: "dateOfDeath",
                          }}
                        ></Input>

                        <Input
                          {...{
                            className: "sm:col-span-3",
                            title: "Nơi mất",
                            type: "text",
                            name: "burialPlace",
                          }}
                        ></Input>
                      </>
                    </If>
                    <div className="mt-6 sm:col-span-7">
                      <h2 className="text-base font-semibold leading-7 text-center text-gray-900">
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
              <div className="w-full border-t"></div>
              <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="px-3 py-2 text-sm font-semibold text-red-500 bg-white border border-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white "
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
