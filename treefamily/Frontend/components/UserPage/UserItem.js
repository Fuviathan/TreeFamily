import React from "react";
import DropDownUser from "./DropDownUser";

export default function UserItem({ person }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-center text-gray-900 whitespace-nowrap sm:pl-6 ">
        {person.generation}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.fullName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.gender}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.dateOfBirth}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.status}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.mobilePhoneNumber}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.career}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.maritalStatus}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.role}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          <DropDownUser person={person}/>
          <span className="sr-only">, {person.name}</span>
        </a>
      </td>
    </tr>
  );
}
