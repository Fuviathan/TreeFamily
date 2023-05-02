/* This example requires Tailwind CSS v2.0+ */
import { For } from "react-haiku";
import SidebarItem from "./SidebarItem";
import Profile from "./Profile";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
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
    <div className="flex flex-row h-full fixed w-64">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800 h-screen">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <nav
            className="mt-5 flex-1 px-2 bg-gray-800 space-y-1"
            aria-label="Sidebar"
          >
            <For
              each={navigation}
              render={(item, index) => (
                <SidebarItem item={item} />
              )}
            />
          </nav>
        </div>
        <Profile />        
      </div>
      <div className="bg-white">abcd</div>
    </div>
  );
}
