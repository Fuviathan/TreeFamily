/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { If } from "react-haiku";
import UpdateQuestion from "./Modal/UpdateQuestion";
import AdminViewQuestion from "./Modal/AdminViewQuestion";
import ViewQuestion from "./Modal/ViewQuestion";
import AdminViewAnsweredQuestion from "./Modal/AdminViewAnsweredQuestion";
import ViewAnsweredQuestion from "./Modal/ViewAnsweredQuestion";
import AnswerQuestion from "./Modal/AnswerQuestion";
import useSWR from "swr"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownQuestion({ item, permission, fullName }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [showDetailModal1, setShowDetailModal1] = useState(false);
  const [showDetailModal2, setShowDetailModal2] = useState(false);
  const [showDetailModal3, setShowDetailModal3] = useState(false);
  const [showDetailModal4, setShowDetailModal4] = useState(false);

  const removeQuestion = async (number) => {
    const endpoint = `http://localhost:8080/question/delete/${number}`;
    const options = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(endpoint, options);
    if (response.status === 204) {
      alert("Xóa thành công");
    } else {
      const result = await response.json();
      alert(result.message)
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
              <If isTrue={permission?.user.role !== "Trưởng họ" && item.status === "Đã phản hồi"}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowDetailModal3(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base"
                      )}
                    >
                      Xem
                    </div>
                  )}
                </Menu.Item>
              </If>
              <If isTrue={permission?.user.role !== "Trưởng họ" && item.status !== "Đã phản hồi"}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowDetailModal4(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base"
                      )}
                    >
                      Xem
                    </div>
                  )}
                </Menu.Item>
              </If>
              <If isTrue={permission?.user.role === "Trưởng họ" && item.status === "Đã phản hồi"}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowDetailModal1(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base"
                      )}
                    >
                      Xem
                    </div>
                  )}
                </Menu.Item>
              </If>
              <If isTrue={permission?.user.role === "Trưởng họ" && item.status !== "Đã phản hồi"}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowDetailModal2(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base"
                      )}
                    >
                      Xem
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowAnswerModal(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-base"
                      )}
                    >
                      Trả lời
                    </div>
                  )}
                </Menu.Item>
              </If>
              <If isTrue={permission?.user.role !== "Trưởng họ" && item.status !== "Đã phản hồi"}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setShowUpdateModal(true);
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
                      onClick={() => {
                        removeQuestion(item.id);
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
              </If>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <If isTrue={showUpdateModal}>
        <UpdateQuestion
          isVisible={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          item={item}
        />
      </If>
      <If isTrue={showDetailModal2}>
        <AdminViewQuestion
          isVisible={showDetailModal2}
          onClose={() => setShowDetailModal2(false)}
          item={item}
        />
      </If>
      <If isTrue={showDetailModal1}>
        <AdminViewAnsweredQuestion
          isVisible={showDetailModal1}
          onClose={() => setShowDetailModal1(false)}
          item={item}
          fullName={fullName}
        />
      </If>
      <If isTrue={showDetailModal3}>
        <ViewAnsweredQuestion
          isVisible={showDetailModal3}
          onClose={() => setShowDetailModal3(false)}
          item={item}
        />
      </If>
      <If isTrue={showDetailModal4}>
        <ViewQuestion
          isVisible={showDetailModal4}
          onClose={() => setShowDetailModal4(false)}
          item={item}
        />
      </If>
      <If isTrue={showAnswerModal}>
        <AnswerQuestion
          isVisible={showAnswerModal}
          onClose={() => setShowAnswerModal(false)}
          item={item}
        />
      </If>
    </>
  );
}
