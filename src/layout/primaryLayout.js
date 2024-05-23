import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../globalComponents/header";
import Sidebar from "../globalComponents/sidebar";
const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-gray-100">
        <Sidebar />
        <div className="container mx-auto px-[30px] mt-[50px] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
