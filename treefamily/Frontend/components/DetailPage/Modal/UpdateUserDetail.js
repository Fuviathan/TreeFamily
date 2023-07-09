import React, { useState } from "react";
import { If } from "react-haiku";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../UI/Input";
import SelectInput from "../../UI/SelectInput";
import useSWR from "swr";
import ComboBoxFamily from "../../UserManagementPage/UserPage/Modal/miniComponents/ComboBoxFamily";

export default function UpdateUserDetail({ isVisible, onClose, person }) {
  const method = useForm({
    defaultValues: {
      id: person.id,
      generation: person.generation,
      partnerId: person.partnerId,
    },
  });
  const { data: data1, error: error1 } = useSWR(
    "http://localhost:8080/member/get-all"
  );

  const { data: namePermission, error: errorPermission } = useSWR(
    "http://localhost:8080/permission-management/get-all"
  );

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


  if (!namePermission) {
    return <></>;
  }

  // Convert dữ liệu từ api sang kiểu mảng để truyền vào option
  const dataOption = namePermission.map((name) => ({
    value: name.permissionGroupName,
  }));
  const dataMember = data1;
  if (!data1) {
    return (
      <div className="flex flex-col mt-8 h-[80vh] overflow-y-scroll"></div>
    );
  }

  const onSubmit = async (formData) => {
    if (formData.partnerId === null) {
      formData.partnerId = person.partnerId;
    } else if (formData.partnerId != person.partnerId) {
      formData.partnerId = formData.partnerId;
    } else {
      formData.partnerId = person.partnerId;
    }
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
                        dataOption: dataOption,
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
                        required: true,
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
