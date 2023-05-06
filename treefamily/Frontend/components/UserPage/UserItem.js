import React from "react";

export default function UserItem( {person} ) {
  return (
    <tr>
      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
        {person.name}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.title}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.email}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {person.role}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
          <span className="sr-only">, {person.name}</span>
        </a>
      </td>
    </tr>
  );
}
