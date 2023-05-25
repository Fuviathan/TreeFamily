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
          defaultValue={props.data}
          id={props.name}
          name={props.name}
          autoComplete={props.name}
          {...register(props.name)}
          onChange={props.onChange}
          disabled={props.disabled}
          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
