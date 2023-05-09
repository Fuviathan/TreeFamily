import React from "react";
import DropDownUser from "./DropDownUser";

export default function UserItem({ person }) {
  return (
    <tr>
      <td className="py-4 text-center pr-10 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 ">
        {person.life}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.name}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.gender}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.birthDate}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.status}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.tel}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.job}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.marital}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.role}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          <DropDownUser></DropDownUser>
          <span className="sr-only">, {person.name}</span>
        </a>
      </td>
    </tr>
  );
}
