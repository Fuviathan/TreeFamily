import React, { useState } from "react";
import DropDownQuestion from "./DropDownQuestion";
import useSWR from 'swr'

export default function QuestionItem({ item, index, permission }) {
  const findUserById = (Id) => {
    if (Id === null || Id === "" || Id === 0) return null
    else {
      const { data, error } = useSWR(`http://localhost:8080/member/get-by-id-member?id=${Id}`)
      return data?.fullName
    }
  }
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="w-6/12 px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.title}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.sendDate}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status}
      </td>
      <td className="flex justify-center gap-4 px-2 py-4 text-sm font-medium text-center whitespace-nowrap sm:pr-6">
        <DropDownQuestion item={item} permission={permission} fullName={findUserById(item.id)}/>
      </td>
    </tr>
  );
}
