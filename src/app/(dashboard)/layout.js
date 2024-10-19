
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";

const DashboardPageLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-screen gap-10">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardPageLayout;
