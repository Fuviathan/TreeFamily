/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownTypeDisplay(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className={`ml-12 relative inline-block text-left`}>
      <div>
        <Menu.Button
          as="div"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex w-full justify-center rounded-md bg-black bg-indigo-600  px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
          Kiểu xem
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 pfocus:outline-none z-20 "
        >
          <div className="py-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 font-bold"
                      : "text-gray-700 font-bold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Dạng Bảng
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 font-bold"
                      : "text-gray-700 font-bold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Dạng Cây
                </a>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
