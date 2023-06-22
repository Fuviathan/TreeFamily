import { useFormContext } from "react-hook-form";
import Validator from "./Validator";
export default function Input(props, { inputType }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.title}
      </label>
      <div className="mt-2">
        <input
          defaultValue={props.data}
          readOnly={props.disabled}
          type={props.type}
          name={props.name}
          id={props.name}
          message={props.message}
          autoComplete="on"
          disabled={props.disabled}
          // placeholder=
          {...register(props.name, {
            required: props.disabled ? false : true,
            minLength: props.minLength,
            pattern: props.pattern,
            // /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          })}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
        />
      </div>
      <Validator
        errors={errors}
        name={props.name}
        message={props.message}
        minlength={props.minLength}
      ></Validator>
    </div>
  );
}
