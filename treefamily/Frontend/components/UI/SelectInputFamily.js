import { useFormContext } from "react-hook-form";

export default function SelectInputFamily(props) {
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
        >
          {dataOption.map((data) => {
            return (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
