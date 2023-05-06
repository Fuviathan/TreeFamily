import UserTable from "./UserItem";
import BaseTemplate from "../BaseTemplate";

export default function MainPage() {
  return (
    <BaseTemplate>
      <div className="h-full py-4 bg-white">
        {/* <div className="mx-6 text-xl font-bold uppercase">Decripstion</div> */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add user
              </button>
            </div>
          </div>
          <UserTable />
        </div>
      </div>
    </BaseTemplate>
  );
}
