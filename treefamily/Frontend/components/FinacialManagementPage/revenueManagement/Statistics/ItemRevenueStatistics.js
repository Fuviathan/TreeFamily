import React from "react";
export default function ItemRevenueStatistics({ item, index }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.revenueName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.revenuePerPerson}
      </td>

      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.dueDate}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status ? "Đã đóng" : "Chưa đóng"}
      </td>
    </tr>
  );
}
