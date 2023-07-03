import BaseTemplate from "../components/BaseTemplate";
import FamilyTreChart from "../components/UserManagementPage/FamilyTreeChart";
import useSWR from "swr";
export default function displayTypeTree() {
  const { data, error } = useSWR("http://localhost:8080/member/get-all");
  if (!data) {
    return (
      <div className="flex flex-col mt-8 h-[80vh] overflow-y-scroll"></div>
    );
  }

  let dataCv = data.map((member) => {
    let pidss = [];
    pidss.push(member.partnerId);

    return {
      id: member.id,
      name: member.fullName,
      // pids: pidss,
      mid: member.momId,
      // fid: member.dadId,
      gender: member.gender === "Nam" ? "male" : "female",
      career: member.career,
      bdate: 1996,
      phone: member.mobilePhoneNumber,
    };
  });
  console.log(dataCv);
  // return <AddMember></AddMember>;

  return (
    <BaseTemplate>
      <button
        onClick={() => {}}
        type="button"
        className="fixed z-20 inline-flex items-center justify-center px-4 py-2 ml-12 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm top-12 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        {/* <a href="/home">Xem dạng bảng</a> */}
      </button>
      <FamilyTreChart nodes={dataCv}></FamilyTreChart>
    </BaseTemplate>
  );
}
