import React from "react";
import DropDownSponsors from "./DropDownSponsors";
import { useRouter } from "next/router";

export default function RevenueItem({ item, index }) {
  const router = useRouter();
  const redirect = () => {
    router.push(`sponsorManagement/${item.id}`);
  };
  return (
    <tr className="hover:bg-gray-200 cursor-pointer" onClick={redirect}>
      <td className="py-4 pr-10 text-sm font-medium text-left text-gray-900 whitespace-nowrap sm:pl-6 ">
        {index + 1}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.year}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.financialSponsorshipName}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.startDate}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.endDate}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
        {item.status}
      </td>
      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <DropDownSponsors item={item} />
        <span className="sr-only">, {item.name}</span>
      </td>
    </tr>
  );
}
