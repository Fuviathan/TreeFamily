import React from "react";
import DropDownRevenues from "./DropDownRevenues";
import { useRouter } from "next/router";

export default function EventItem({ item, index }) {
  const router = useRouter();
  const redirect = () => {
    router.push(`eventManagement/${item.id}`);
  };
  return (
    <tr className="cursor-pointer hover:bg-gray-200">
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.year}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.revenueName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.revenuePerPerson} VNĐ
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.dueDate}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownRevenues item={item} redirect={redirect} />
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  );
}
