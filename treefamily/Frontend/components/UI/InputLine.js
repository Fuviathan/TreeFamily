export default function Input(props) {
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
            disabled
            type={props.type}
            // name={props.name}
            // id={props.name}
            className="block w-full bg-transparent  py-1.5 text-gray-900   px-4 border-b-2 border-dashed"
          />
        </div>
      </div>
    );
  }
  