/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import DetailEvent from "./Modal/DetailEvent";
import UpdateEvent from "./Modal/UpdateEvent";
import { If } from "react-haiku";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownEvent({ item, redirect, permission }) {
  const [showDetail, setShowDetail] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const removeEvent = async (number) => {
    const endpoint = `http://localhost:8080/event-management/delete/${number}`;
    const options = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(endpoint, options);
    if (response.status === 204) {
      alert("Xóa thành công");
    } else {
      // const result = await response.json();
      alert("result")
    }
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
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
          <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={(e) => {
                      redirect();
                    }}
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-base cursor-pointer"
                    )}
                  >
                    Xem danh sách khách mời
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => setShowDetail(true)}
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-base cursor-pointer"
                    )}
                  >
                    Xem chi tiết sự kiện
                  </div>
                )}
              </Menu.Item>
              <If isTrue={permission?.user.updateEvent}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setShowUpdateModal(true)}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base cursor-pointer"
                      )}
                    >
                      Sửa
                    </div>
                  )}
                </Menu.Item>
              </If>
              <If isTrue={permission?.user.deleteEvent}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={(e) => removeEvent(item.id)}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base cursor-pointer"
                      )}
                    >
                      Xóa
                    </div>
                  )}
                </Menu.Item>
              </If>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <If isTrue={showDetail}>
        <DetailEvent
          isVisible={showDetail}
          onClose={() => setShowDetail(false)}
          item={item}
        />
      </If>
      <If isTrue={showUpdateModal}>
        <UpdateEvent
          isVisible={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          item={item}
        />
      </If>
    </>
  );
}
