import React from 'react'
import DropDownRevenues from './DropDownRevenues'

export default function RevenueItem({ item, index }) {
  return (
    <tr>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.year}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.estimatedRevenue}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.realRevenue}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.dueDate}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownRevenues item={item} />
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  )
}
