import UpdateMember from "../components/FunctionMember/UpdateMember";
import AddMember from "../components/FunctionMember/AddMember";
import BaseTemplate from "../components/BaseTemplate";
import FamilyTreChart from "../components/FamilyTreeChart";
export default function update() {
  // return <AddMember></AddMember>;
  return (
    <BaseTemplate>
      <UpdateMember></UpdateMember>
    </BaseTemplate>
  );
}
