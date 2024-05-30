import React from "react";
import loginPic from "../assets/loginPic.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="hidden md:block md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <img src={loginPic} alt="login" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
