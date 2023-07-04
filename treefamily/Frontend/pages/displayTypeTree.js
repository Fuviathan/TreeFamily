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
  const imgNam = "https://cdn-icons-png.flaticon.com/512/3233/3233483.png";
  const imgNu = "https://cdn-icons-png.flaticon.com/512/3233/3233486.png";
  let dataCv = data.map((member, index) => {
    if (
      member.dadId === null ||
      member.momId === null ||
      member.momId === 0 ||
      member.dadId === 0
    ) {
      return {
        id: member.id,
        role: member.role,
        name: member.fullName,
        pids: [member.partnerId],
        gender:
          member.status === "Đã mất"
            ? null
            : member.gender === "Nam"
            ? "male"
            : "female",
        career: member.career,
        bdate: `Ngày sinh: ${member.dateOfBirth}`,

        // tags: ["family_single_female"],
        img: member.gender === "Nam" ? imgNam : imgNu,
      };
    } else if (index > 0 && data[index - 1].partnerId === member.id) {
      return {
        id: member.id,
        role: member.role,
        name: member.fullName,
        pids: [member.partnerId],
        gender:
          member.status === "Đã mất"
            ? null
            : member.gender === "Nam"
            ? "male"
            : "female",
        career: member.career,
        bdate: `Ngày sinh: ${member.dateOfBirth}`,

        // tags: ["family_single_female"],
        img: member.gender === "Nam" ? imgNam : imgNu,
      };
    } else {
      return {
        id: member.id,
        role: member.role,
        name: member.fullName,
        pids: [member.partnerId],
        mid: member.dadId !== null || member.dadId !== 0 ? member.dadId : null,
        fid: member.momId !== null || member.momId !== 0 ? member.momId : null,
        gender:
          member.status === "Đã mất"
            ? null
            : member.gender === "Nam"
            ? "male"
            : "female",
        career: member.career,
        bdate: `Ngày sinh: ${member.dateOfBirth}`,
        img: member.gender === "Nam" ? imgNam : imgNu,
        // tags: ["family_single_female"],
      };
    }
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
        <a href="/home">Xem dạng bảng</a>
      </button>
      <FamilyTreChart nodes={dataCv}></FamilyTreChart>
    </BaseTemplate>
  );
}
