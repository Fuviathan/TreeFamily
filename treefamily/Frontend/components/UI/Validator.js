import { If } from "react-haiku";
export default function Validator(props) {
  const { name, errors, message, minlength } = props;
  return (
    <div>
      {/* {console.log(err)} */}
      <If isTrue={errors[name]?.type === "minLength"}>
        <span className="text-red-500 text-sm">
          Độ dài tối thiểu là {minlength}
        </span>
      </If>
      <If isTrue={errors[name]?.type === "required"}>
        <span className="text-red-500 text-sm">Vui lòng nhập thông tin</span>
      </If>
      <If isTrue={errors[name]?.type === "pattern"}>
        <span className="text-red-500 text-sm">{message}</span>
      </If>
    </div>
  );
}
