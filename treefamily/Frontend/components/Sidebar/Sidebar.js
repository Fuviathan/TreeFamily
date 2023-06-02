import { For, If } from "react-haiku";
import SidebarItem from "./SidebarItem";
import Profile from "./Profile";
import SidebarItemWithChildren from "./SidebarItemWithChildren";

const navigation = [
  { name: "Quản lý gia phả", href: "/home", current: false },
  {
    name: "Quản lý tài chính", href: "", current: false, children: [
      { name: 'Quản lý thu', href: '/financialManagement/revenueManagement', current: false },
      { name: 'Quản lý tài trợ', href: '/financialManagement/sponsorManagement', current: false },
      { name: 'Quản lý chi', href: '/financialManagement/expenseManagement', current: false },
      { name: 'Báo cáo thu chi', href: '#', current: false },
    ],
  },
];

const adminNavigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export default function Sidebar() {
  return (
    <div className="flex flex-row w-1/6 h-full">
      <div className="flex flex-col flex-1 h-screen min-h-0 bg-gray-800">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <nav
            className="flex-1 px-2 mt-5 space-y-1 bg-gray-800"
            aria-label="Sidebar"
          >
            <For
              each={navigation}
              render={(item, index) => (
                <>
                  <If isTrue={!item.children}>
                    <SidebarItem item={item} />
                  </If>
                  <If isTrue={item.children}>
                    <SidebarItemWithChildren item={item} />
                  </If>
                </>
              )}
            />
          </nav>
        </div>
        <Profile />
      </div>
    </div>
  );
}
