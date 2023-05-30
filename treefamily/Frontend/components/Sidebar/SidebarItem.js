import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarItem({item}) {
  // const { asPath } = useRouter()
  // if (asPath.startsWith(item.href)) {
  //   item.current=true
  // }
  // if (!asPath.startsWith(item.href)) {
  //   item.current=false
  // }
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
