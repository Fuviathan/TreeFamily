import React from "react";
import DropDownCategory from "./DropDownCategory";

export default function ItemInCategory({ item, index, permission }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.sponsorsName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.typeOfSponsorship}
      </td>

      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.organization}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.date}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.note}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.sponsorshipMoney}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownCategory item={item} permission={permission}/>
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  );
}
