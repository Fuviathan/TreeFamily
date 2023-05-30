import React from "react";
import DropDownCategory from "./DropDownCategory";
export default function ItemInCategory({ item, index }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.payer}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.money}
      </td>

      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.date}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status ? "Đã đóng" : "Chưa đóng"}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownCategory item={item} />
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  );
}
