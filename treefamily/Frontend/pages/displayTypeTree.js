import UpdateMember from "../components/FunctionMember/UpdateMember";
import DropDownTypeDisplay from "../components/UserPage/DropDownTypeDisplay";
import BaseTemplate from "../components/BaseTemplate";
import FamilyTreChart from "../components/FamilyTreeChart";
export default function displayTypeTree() {
  // return <AddMember></AddMember>;
  return (
    <BaseTemplate>
      <button
        onClick={() => {}}
        type="button"
        className=" z-20 top-12 fixed ml-12 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        <a href="http://localhost:3000/userpage">Xem dạng bảng</a>
      </button>
      <FamilyTreChart></FamilyTreChart>
    </BaseTemplate>
  );
}
