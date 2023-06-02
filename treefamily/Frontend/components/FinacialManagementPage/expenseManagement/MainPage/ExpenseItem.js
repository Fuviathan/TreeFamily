import React from "react";
import DropDownExpense from "./DropDownExpense";
import { useRouter } from "next/router";

export default function ExpenseItem({ item, index }) {
  const router = useRouter();
  const redirect = () => {
    router.push(`expenseManagement/${item.id}`);
  };
  return (
    <tr className="cursor-pointer hover:bg-gray-200" onClick={redirect}>
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
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownExpense item={item} />
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  );
}
