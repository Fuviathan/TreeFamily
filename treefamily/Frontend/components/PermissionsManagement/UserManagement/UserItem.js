import React from "react";
import { useState } from "react";
import { If } from "react-haiku";
import DropDownExpense from "./DropDownExpense";
import UpdateUserPermission from "./Modal/UpdateExpense";
import { useRouter } from "next/router";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ExpenseItem({ item, index }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const router = useRouter();
  // const redirect = () => {
  //   router.push(`expenseManagement/${item.id}`);
  // };
  return (
    <tr
      className="cursor-pointer hover:bg-gray-200"
      //  onClick={redirect}
    >
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.year}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.expenseName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.expenseManager}
      </td>

      <td className="flex py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6 gap-4">
        {/* <DropDownExpense item={item} /> */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <EyeIcon
            className="text-gray-400 h-6 mt-1 w-7 hover:text-gray-600"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowUpdateModal(true);
          }}
        >
          <PencilIcon
            className="text-gray-400 h-6 mt-1 w-7 hover:text-gray-600"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <TrashIcon
            className="text-gray-400 h-6 mt-1 w-7 hover:text-gray-600"
            aria-hidden="true"
          />
        </button>
        {/* <span className="sr-only">, {item.name}</span> */}
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
