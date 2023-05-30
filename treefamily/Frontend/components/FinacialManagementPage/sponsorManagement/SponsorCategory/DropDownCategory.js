/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// import DetailRevenue from "./Modal/DetailRevenue";
import UpdateItemInCategory from "./Modal/UpdateItemInCategory";
// import UpdateRevenue from "./Modal/UpdateRevenue";
import { If } from "react-haiku";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownRevenues({ item }) {
  // const [showDetail, setShowDetail] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const removeSponsor = async (number) => {
    const endpoint = `http://localhost:8080/sponsorship-detail/delete/${item.id}`;
    const options = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      alert("Xóa thành công");
      onClose();
    } else {
      // const result = await response.json();
      alert("Xóa thành công");
    }
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex items-center text-gray-400 rounded-full hover:text-gray-600 focus:outline-none"
          >
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-6 mt-1 w-7" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="flex flex-col py-1">
              {/* <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={(e) => {
                      setShowDetail(true);
                      e.stopPropagation();
                    }}
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-base"
                    )}
                  >
                    Xem
                  </div>
                )}
              </Menu.Item> */}
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={(e) => {
                      setShowUpdateModal(true);
                      e.stopPropagation();
                    }}
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-base"
                    )}
                  >
                    Sửa
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={(e) => {
                      // setShowUpdateModal(true);
                      removeSponsor(item.id);
                      e.stopPropagation();
                    }}
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-base"
                    )}
                  >
                    Xóa
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* <If isTrue={showDetail}>
        <DetailRevenue isVisible={showDetail} onClose={() => setShowDetail(false)} item={item} />
      </If> */}
      <If isTrue={showUpdateModal}>
        <UpdateItemInCategory
          isVisible={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          item={item}
        />
      </If>
    </>
  );
}
