import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <Topbar />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
