import React from "react";
import { useState } from "react";
import { If } from "react-haiku";
import DropDownUserPermission from "./DropDownUserPermission";
import UpdateUserPermission from "./Modal/UpdateExpense";

export default function UserItem({ item, index }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const router = useRouter();
  // const redirect = () => {
  //   router.push(`expenseManagement/${item.id}`);
  // };
  return (
    <tr
      className=""
    >
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.fullName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.userName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.role}
      </td>

      <td className="gap-4 py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownUserPermission item={item} />
      </td>
      <If isTrue={showUpdateModal}>
        <UpdateUserPermission
          isVisible={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          item={item}
        />
      </If>
    </tr>
  );
}
