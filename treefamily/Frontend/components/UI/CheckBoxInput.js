import { useFormContext } from "react-hook-form";
import Validator from "./Validator";
export default function CheckBoxInput(props) {
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
          type={props.type}
          name={props.name}
          id={props.name}
          autoComplete="off"
          // placeholder=
          {...register(props.name)}
          checked={props.checked}
          onChange={props.onChange}
          value={props.name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
        />
      </div>
    </div>
  );
}
