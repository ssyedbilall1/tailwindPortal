import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../globalComponents/header";
import Sidebar from "../globalComponents/sidebar";
const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default PrimaryLayout;
