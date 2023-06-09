import BaseTemplate from "../../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import TableOfGuests from "./TableOfGuests";
import useSWR from "swr";
import AddNewGuest from "./Modal/AddNewGuest";
import AddSingleGuest from "./Modal/AddSingleGuest";
import { useSession } from "next-auth/react";

export default function MainPage({ pid }) {
  const { data: session, status } = useSession()
  const { data, error } = useSWR(
    `http://localhost:8080/guest-management/get-all-an-event?eventManagementId=${pid}`
  );
  const [showAddGuestModal, setAddNewGuest] = useState(false);
  const [showAddSingleGuestModal, setAddNewSingleGuest] = useState(false);

  if (!Array.isArray(data)) {
    return (
      <>
        <BaseTemplate>
          <div className="h-full py-4 bg-white">
            {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="flex sm:flex-auto">
                  <h1 className="mt-1 text-xl font-semibold text-gray-900">
                    Danh sách khách mời tham gia
                  </h1>
                </div>
                <If isTrue={session?.user.createEvent}>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      onClick={() => setAddNewGuest(true)}
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Thiết lập khách mời
                    </button>
                  </div>
                </If>
              </div>
              <TableOfGuests pid={pid} permission={session} />
            </div>
          </div>
          <If isTrue={showAddGuestModal}>
            <AddNewGuest
              onClose={() => setAddNewGuest(false)}
              isVisible={showAddGuestModal}
              id={pid}
            />
          </If>
        </BaseTemplate>
      </>
    );
  }
  if (Array.isArray(data)) {
    return (
      <>
        <BaseTemplate>
          <div className="h-full py-4 bg-white">
            {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="flex sm:flex-auto">
                  <h1 className="mt-1 text-xl font-semibold text-gray-900">
                    Danh sách khách mời tham gia
                  </h1>
                </div>
                <If isTrue={session?.user.createEvent}>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      onClick={() => setAddNewSingleGuest(true)}
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Thêm khách mời
                    </button>
                  </div>
                </If>
              </div>
              <TableOfGuests pid={pid} permission={session} />
            </div>
          </div>
          <If isTrue={showAddGuestModal}>
            <AddNewGuest
              onClose={() => setAddNewGuest(false)}
              isVisible={showAddGuestModal}
              id={pid}
            />
          </If>
          <If isTrue={showAddSingleGuestModal}>
            <AddSingleGuest
              onClose={() => setAddNewSingleGuest(false)}
              isVisible={showAddSingleGuestModal}
              id={pid}
            />
          </If>
        </BaseTemplate>
      </>
    );
  }
}

