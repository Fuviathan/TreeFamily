import React from "react";
export default function ItemExpenseStatistics({ item, index }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.expenseName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.receiver}
      </td>

      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.dateOfPay}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.expenseMoney}
      </td>
    </tr>
  );
}
