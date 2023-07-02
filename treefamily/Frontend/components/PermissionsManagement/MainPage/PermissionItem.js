import React, { useState } from "react";
import DropDownPermission from "./DropDownPermission";
import { useRouter } from "next/router";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { If } from "react-haiku";
import UpdatePermission from "./Modal/UpdatePermission";

export default function PermissionItem({ item, index }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const router = useRouter();
  // const redirect = () => {
  //   router.push(`expenseManagement/${item.id}`);
  // };
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.permissionGroupName}
      </td>
      <td className="w-6/12 px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.permissionsDescription}
      </td>
      <td className="flex justify-center gap-4 px-2 py-4 text-sm font-medium text-center whitespace-nowrap sm:pr-6">
        <DropDownPermission item={item} />
      </td>
      <If isTrue={showUpdateModal}>
        <UpdatePermission
          isVisible={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          item={item}
        />
      </If>
    </tr>
  );
}
