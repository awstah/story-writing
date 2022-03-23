import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Layout() {
  return (
    <div className="flex max-w-7xl mx-auto overflow-hidden">
      <Sidebar />
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
