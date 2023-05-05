import { useFormContext } from "react-hook-form";
import { If } from "react-haiku";

export default function SelectInput(props) {
  const { register } = useFormContext();
  const dataOption = props.dataOption;
  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.title}
      </label>
      <div className="mt-2">
        <select
          id={props.name}
          name={props.name}
          autoComplete={props.name}
          {...register(props.name)}
          onChange={props.onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
        >
          {dataOption.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
