import React from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function BaseTemplate(props) {
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 w-screen h-screen bg-gray-300">
          {props.children}
        </div>
      </div>
    </>
  );
}
