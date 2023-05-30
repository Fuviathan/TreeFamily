import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Input from "../../../UI/Input";
import SelectInput from "../../../UI/SelectInput";
import SelectInputFamily from "../../../UI/SelectInputFamily";
import useSWR from "swr";
import ComboBoxFamily from "./miniComponents/ComboBoxFamily";
import CheckBoxInput from "../../../UI/CheckBoxInput";

// Demo nhập chọn thông tin bố mẹ gửi id form

export default function UpdateMember({ isVisible, onClose, person }) {
  const method = useForm({
    defaultValues: {
      id: person.id,
      generation: person.generation,
      momId: person.momId,
      dadId: person.dadId,
      partnerId: person.partnerId,
    },
  });

  const [isCheckedMarital, setIsCheckedMarital] = useState(
    person.maritalStatus
  );
  const [isCheckedJob, setIsCheckedJob] = useState("Nông Dân");
  const [isCheckedStatus, setIsCheckedStatus] = useState(
    person.status === "Đã mất"
  );

  const handleCheckboxChangeStatus = (event) => {
    setIsCheckedStatus(event.target.checked);
  };

  const handleChangeMarital = (event) => {
    setIsCheckedMarital(event.target.value);
  };

  const changeJob = (event) => {
    setIsCheckedJob(event.target.value);
  };

  const { data: data1, error: error1 } = useSWR(
    "http://localhost:8080/member/get-all"
  );
  const dataMember = data1;
  console.log(dataMember);
  if (!data1) {
    return (
      <div className="flex flex-col mt-8 h-[80vh] overflow-y-scroll"></div>
    );
  }

  // if (!data) {
  //   return (
  //     <div className="flex flex-col mt-8 h-[80vh] overflow-y-scroll"></div>
  //   );
  // }

  const onSubmit = async (formData) => {
    if (formData.status === true) {
      formData.status = "Đã mất";
    } else {
      formData.status = "";
    }
    // Check Dữ liệu cha,mẹ vợ chồng trước khi trả về
    if (formData.momId === "") {
      console.log(formData.momId);
      formData.momId = person.momId;
    } else if (formData.momId != person.momId) {
      console.log(formData.momId);
      formData.momId = person.momId;
    } else {
      console.log(formData.momId);
      formData.momId = person.momId;
    }

    if (formData.momId === "") {
      formData.dadId = person.dadId;
    } else if (formData.dadId != person.dadId) {
      formData.dadId = person.dadId;
    } else {
      formData.dadId = person.dadId;
    }

    if (formData.momId === "") {
      formData.partnerId = person.partnerId;
    } else if (formData.partnerId != person.partnerId) {
      formData.partnerId = person.partnerId;
    } else {
      formData.partnerId = person.partnerId;
    }

    // console.log(data.momId);
    // console.log(data.dadId);
    formData.momId = Number(formData.momId);
    formData.dadId = Number(formData.dadId);
    formData.partnerId = Number(formData.partnerId);
    const JSONdata = JSON.stringify(formData);
    const endpoint = "http://localhost:8080/member/update";
    const options = {
      method: "PUT",
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
      alert("Sửa thông tin thành công");
      onClose();
    } else {
      const result = await response.json();
      alert(result.message);
    }

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify(data);

    // var requestOptions = {
    //   method: "PUT",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("http://localhost:8080/member/update", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     console.log(result);
    //     onClose();
    //   })
    //   .catch((error) => console.log("error", error));
  };
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
                        data: person.fullName,
                        className: "sm:col-span-3",
                        title: "Họ Tên",
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
                        data: person.gender,
                        className: "sm:col-span-1",
                        name: "gender",
                        title: "Giới tính",
                        dataOption: [{ value: "Nam" }, { value: "Nữ" }],
                      }}
                    ></SelectInput>

                    <SelectInput
                      {...{
                        data: person.role,
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
                        data: person.dateOfBirth,
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
                        data: person.mobilePhoneNumber,
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
                        data: person.career,
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
                          data: person.career,
                          className: "sm:col-span-3",
                          title: "Nhập tên Nghề",
                          name: "career",
                          type: "text",
                        }}
                      ></Input>
                    </If>

                    <SelectInput
                      {...{
                        data: person.education,
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

                    <div className="sm:col-span-4"></div>

                    {/* <SelectInputFamily
                      {...{
                        data: data.dadId,
                        className: "sm:col-span-3",
                        name: "dadId",
                        title: "Họ tên cha",
                        dataOption: dataMember,
                      }}
                    ></SelectInputFamily> */}

                    <ComboBoxFamily
                      {...{
                        data: person.dadId,
                        title: "Họ tên cha",
                        people: dataMember,
                        className: " sm:col-span-3 z-20",
                        name: "dadId",
                      }}
                    ></ComboBoxFamily>

                    {/* <SelectInputFamily
                      {...{
                        data: data.momId,
                        className: "sm:col-span-3",
                        name: "momId",
                        title: "Họ tên mẹ",
                        dataOption: dataMember,
                      }}
                    ></SelectInputFamily> */}

                    <ComboBoxFamily
                      {...{
                        data: person.momId,
                        title: "Họ tên mẹ",
                        people: dataMember,
                        className: "sm:col-span-3",
                        name: "momId",
                      }}
                    ></ComboBoxFamily>

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
                              // checked="true"
                              defaultChecked={
                                person.maritalStatus === "Độc thân"
                              }
                              {...method.register("maritalStatus")}
                              onChange={handleChangeMarital}
                              className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                              type="radio"
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
                              defaultChecked={
                                person.maritalStatus === "Đã kết hôn"
                              }
                              {...method.register("maritalStatus")}
                              className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                              onChange={handleChangeMarital}
                              type="radio"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <If isTrue={isCheckedMarital === "Đã kết hôn"}>
                      {/* <SelectInputFamily
                        {...{
                          data: data.partnerId,
                          className: "sm:col-span-3",
                          name: "partnerId",
                          type: "number",
                          title: "Họ tên vợ/chồng",
                          dataOption: DUMMY_DATA1,
                        }}
                      ></SelectInputFamily> */}

                      <ComboBoxFamily
                        {...{
                          data: person.partnerId,
                          title: "Họ tên vợ/chồng",
                          people: dataMember,
                          className: "sm:col-span-3 ",
                          name: "partnerId",
                        }}
                      ></ComboBoxFamily>
                    </If>

                    {/* <fieldset className="sm:col-span-6 ">
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
                            defaultChecked={data.maritalStatus === "Độc thân"}
                            onChange={handleChangeMarital}
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="single"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Độc thân
                          </label>
                        </div> */}

                    {/* <div className="flex items-center gap-x-3">
                          <input
                            id="married"
                            name="marital-status"
                            type="radio"
                            value="married"
                            {...method.register("checkMarital")}
                            // checked={isCheckedMarital === "married"}
                            defaultChecked={data.maritalStatus === "married"}
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

                    <If isTrue={data.maritalStatus === "married"}>
                      <SelectInputFamily
                        {...{
                          data: DUMMY_DATA.partnerId,
                          className: "sm:col-span-3",
                          name: "partnerId",
                          title: "Họ tên vợ/chồng",
                          dataOption: DUMMY_DATA1,
                        }}
                      ></SelectInputFamily>
                    </If> */}
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
                      <div className="flex gap-x-3">
                        <div className="flex items-center h-6">
                          <input
                            id="status"
                            name="status"
                            type="checkbox"
                            defaultChecked={person.status === "Đã mất"}
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

                    <If isTrue={isCheckedStatus}>
                      <Input
                        {...{
                          data: person.dateOfDeath,
                          className: "sm:col-span-3",
                          title: "Ngày mất",
                          type: "date",
                          name: "dateOfDeath",
                        }}
                      ></Input>
                      <Input
                        {...{
                          data: person.burialPlace,
                          className: "sm:col-span-3",
                          title: "Nơi mất",
                          type: "text",
                          name: "burialPlace",
                        }}
                      ></Input>
                    </If>

                    <div className="mt-6 sm:col-span-4">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Thông tin tài khoản đăng nhập
                      </h2>
                    </div>

                    <Input
                      {...{
                        data: person.userName,
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
                        data: person.password,
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
