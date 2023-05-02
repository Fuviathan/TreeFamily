import React from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarItem({item}) {
  return (
    <Link
      href={item.href}
      className={classNames(
        item.current
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center px-2 py-2 text-lg font-medium rounded-md"
      )}
    >
      <span className="flex-1">{item.name}</span>
    </Link>
  );
}
