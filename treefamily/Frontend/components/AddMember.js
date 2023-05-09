import React, { Fragment, useState } from "react";
import { If } from "react-haiku";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isCheckedMarital, setIsCheckedMarital] = useState("");
  const [isCheckedStatus, setIsCheckedStatus] = useState(false);
  const [isCheckedJob, setIsCheckedJob] = useState("Nông Dân");

  const handleChangeMarital = (event) => {
    setIsCheckedMarital(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChangeStatus = (event) => {
    setIsCheckedStatus(event.target.checked);
  };

  const changeJob = (event) => {
    console.log(isCheckedJob);
    setIsCheckedJob(event.target.value);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <div className="fixed top-0 w-full h-screen bg-gray-700 bg-slate-200"></div>
      <form
        className="relative z-20 flex flex-col items-center max-w-3xl py-4 mx-auto mt-16 bg-white border-2 border-solid border-slate-300 h-80vh"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full px-10 space-y-12 overflow-y-scroll">
          <div className="pb-12 border-b border-gray-900/10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Thông tin cá nhân
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thành viên nhập thông tin của bản thân
            </p>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ Tên
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Nhập họ và tên"
                    {...register("name", {
                      required: true,
                      minLength: 5,
                      pattern:
                        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                  <If isTrue={errors.name?.type === "minLength"}>
                    <span className="text-sm text-red-500">
                      Độ dài tối thiểu là 5
                    </span>
                  </If>
                  <If isTrue={errors.name?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If>
                  <If isTrue={errors.name?.type === "pattern"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập đúng định dạng tên
                    </span>
                  </If>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Giới tính
                </label>
                <div className="mt-2">
                  <select
                    id="sex"
                    name="sex"
                    autoComplete="sex"
                    {...register("sex")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                  >
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Vai trò
                </label>
                <div className="mt-2">
                  <select
                    id="role"
                    name="role"
                    autoComplete="role"
                    {...register("role")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                  >
                    <option>Trưởng họ</option>
                    <option>Thành viên</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="birth-date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ngày sinh
                </label>
                <div className="mt-2">
                  <input
                    id="birth-date"
                    name="birth-date"
                    type="date"
                    autoComplete="date"
                    pattern="\d{2}/\d{2}/\d{4}"
                    {...register("birtDate", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                  <If isTrue={errors.birtDate?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Số điện thoại
                </label>
                <div className="mt-2">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    {...register("tel", {
                      required: true,
                      pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                      minLength: 10,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                  <If isTrue={errors.tel?.type === "minLength"}>
                    <span className="text-sm text-red-500">
                      Độ dài tối thiểu là 10
                    </span>
                  </If>
                  <If isTrue={errors.tel?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If>
                  <If isTrue={errors.tel?.type === "pattern"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập đúng định dạng số điện thoại
                    </span>
                  </If>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nghề nghiệp
                </label>
                <div className="mt-2">
                  <select
                    id="job"
                    name="job"
                    autoComplete="text"
                    {...register("job")}
                    value={isCheckedJob}
                    onChange={changeJob}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                  >
                    <option>Nông Dân</option>
                    <option>Kinh Doanh</option>
                    <option>Giáo Viên</option>
                    <option>Học Sinh</option>
                    <option>Khác*</option>
                  </select>
                </div>
              </div>

              <If isTrue={isCheckedJob === "Khác*"}>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="job"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nghề nghiệp
                  </label>
                  <div className="mt-2">
                    <input
                      id="job"
                      name="job"
                      type="text"
                      // value={setIsCheckedJob}
                      placeholder="Nhập tên nghề"
                      {...register("job")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                    />
                  </div>
                </div>
              </If>

              <If isTrue={isCheckedJob === "Học Sinh"}>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="education"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Học vấn
                  </label>
                  <div className="mt-2">
                    <select
                      id="education"
                      name="education"
                      autoComplete="text"
                      {...register("education")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                    >
                      <option>Yếu</option>
                      <option>Trung bình</option>
                      <option>Khá</option>
                      <option>Giởi</option>
                    </select>
                  </div>
                </div>
              </If>

              <div className="sm:col-span-4"></div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="father"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ tên cha
                </label>
                <div className="mt-2">
                  <select
                    id="father"
                    name="father"
                    // value={"1"}
                    {...register("father")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                  >
                    {DUMMY_DATA.map((data) => {
                      return (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      );
                    })}
                    {/* <option>Chọn</option>
                    <option>Nguyễn Văn A</option>
                    <option>Khác</option> */}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="mother"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Họ tên mẹ
                </label>
                <div className="mt-2">
                  <select
                    id="mother"
                    name="mother"
                    {...register("mother")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                  >
                    <option>Chọn</option>
                    <option>Phạm Thị B</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>

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
                      {...register("checkMarital")}
                      checked={isCheckedMarital === "single"}
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
                      {...register("checkMarital")}
                      checked={isCheckedMarital === "married"}
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

              {/* {isCheckedMarital === "married" && (
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mylove"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ tên vợ/chồng
                  </label>
                  <div className="mt-2">
                    <select
                      id="mylove"
                      name="mylove"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Chọn</option>
                      <option>Nguyễn Văn A</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
              )} */}

              <If isTrue={isCheckedMarital === "married"}>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mylove"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ tên vợ/chồng
                  </label>
                  <div className="mt-2">
                    <select
                      id="mylove"
                      name="mylove"
                      {...register("mylove")}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                    >
                      <option>Chọn</option>
                      <option>Nguyễn Văn A</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
              </If>

              <div className="sm:col-span-4">
                <div className="relative flex gap-x-3">
                  <div className="flex items-center h-6">
                    <input
                      id="status"
                      name="status"
                      type="checkbox"
                      {...register("status")}
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                      checked={isCheckedStatus}
                      onChange={handleCheckboxChangeStatus}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="status"
                      className="font-medium text-gray-900"
                    >
                      Trạng thái
                    </label>
                  </div>
                </div>
              </div>
              <If isTrue={isCheckedStatus}>
                <>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="death-date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ngày mất
                    </label>
                    <div className="mt-2">
                      <input
                        id="death-date"
                        name="death-date"
                        type="date"
                        autoComplete="date"
                        {...register("death-date")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="death-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nơi mất:
                    </label>
                    <div className="mt-2">
                      <input
                        id="death-address"
                        name="death-address"
                        type="text"
                        {...register("death-address")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                      />
                    </div>
                  </div>
                </>
              </If>

              <div className="mt-6 sm:col-span-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Thông tin tài khoản đăng nhập
                </h2>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tên đăng nhập
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="Nhập tên đăng nhập"
                    {...register("username", {
                      required: true,
                      minLength: 5,
                      pattern:
                        /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                  <If isTrue={errors.username?.type === "minLength"}>
                    <span className="text-sm text-red-500">
                      Độ dài tối thiểu là 5
                    </span>
                  </If>
                  <If isTrue={errors.username?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If>
                  <If isTrue={errors.username?.type === "pattern"}>
                    <span className="text-sm text-red-500">
                      Vui lòng không chứa ký tự đặc biệt
                    </span>
                  </If>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    placeholder="Nhập tên đăng nhập"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {/* <If isTrue={errors.password?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If> */}
                  <If isTrue={errors.password?.type === "required"}>
                    <span className="text-sm text-red-500">
                      Vui lòng nhập thông tin
                    </span>
                  </If>
                  <If isTrue={errors.password?.type === "pattern"}>
                    <span className="text-sm text-red-500">
                      Mật khẩu có độ dài 8 ký tự chứa ít nhất 1 chữ và 1 số
                    </span>
                  </If>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center self-end justify-end mt-6 mr-20 gap-x-6">
          <button
            type="button"
            // className="text-sm font-semibold leading-6 text-gray-900 bg-indigo-600 rounded-md"
            className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </Fragment>
  );
}
