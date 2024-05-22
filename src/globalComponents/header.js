import React from "react";
import { FaRegBell } from "react-icons/fa6";
import ProfileImg from "../assets/profile.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-custom-header rounded-b-[55px]">
          <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">
              Metropolitan Corporation Rawalpindi
            </span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <span className="mr-2 text-xl font-bold text-white">
              <FaRegBell />
            </span>
            <span className="mr-2 text-xl font-semibold text-white">
              Hi, Admin
            </span>
            <img
              src={ProfileImg}
              alt="Profile Img"
              className="bg-cover w-9 border-solid border-white	border-2 rounded-full"
            />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
