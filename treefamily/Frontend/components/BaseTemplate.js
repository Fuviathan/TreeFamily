import React from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function BaseTemplate(props) {
  return (
    <>
      <Sidebar />
      <div className="md:pl-64 flex flex-col flex-1">
        {props.children}
      </div>
    </>
  );
}
