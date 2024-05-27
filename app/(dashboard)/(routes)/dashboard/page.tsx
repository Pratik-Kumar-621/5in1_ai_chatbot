import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <div>Dashboard</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
