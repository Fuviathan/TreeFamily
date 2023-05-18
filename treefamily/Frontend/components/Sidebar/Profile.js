import React from "react";
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="flex flex-shrink-0 p-4 bg-gray-700">
      <Link href="/test" className="flex-shrink-0 block w-full group">
        <div className="flex items-center"> 
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Tom Cook</p>
            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
              View profile
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
