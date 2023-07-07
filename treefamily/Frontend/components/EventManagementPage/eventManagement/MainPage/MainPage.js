import BaseTemplate from "../../../BaseTemplate";
import { If } from "react-haiku";
import { useState } from "react";
import Link from "next/link";
import EventsTable from "./EventsTable";
import AddEvent from "./Modal/AddEvent";
import { useSession } from "next-auth/react";


export default function MainPage() {
  const { data: session, status } = useSession()
  const [addNewEvent, setAddNewEvent] = useState(false);
  return (
    <>
      <BaseTemplate>
        <div className="h-full py-4 bg-white">
          {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="flex sm:flex-auto">
                <h1 className="mt-1 text-xl font-semibold text-gray-900">
                  Danh sách các sự kiện
                </h1>
              </div>
              <If isTrue={session?.user.createEvent}>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    onClick={() => setAddNewEvent(true)}
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Thêm sự kiện
                  </button>
                </div>
              </If>
            </div>
            <If isTrue={session?.user.viewEvent}>
              <EventsTable permission={session}/>
            </If>
          </div>
        </div>
        <If isTrue={addNewEvent}>
          <AddEvent
            onClose={() => setAddNewEvent(false)}
            isVisible={addNewEvent}
          />
        </If>
      </BaseTemplate>
    </>
  );
}
