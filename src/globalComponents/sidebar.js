import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import SidebarLinks from "../websiteData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="p-0">
      <div
        className={`shadow-md shadow-black h-screen p-5 pt-8 rounded-lg ${
          open ? "w-72" : "w-20"
        } relative duration-500`}
      >
        <IoArrowBackCircleOutline
          className={`bg-white text-custom-header text-3xl duration-500 rounded-full absolute -right-3 top-9 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-2">
          {SidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => handleLinkClick(index)}
              className={`text-black text-md flex items-center gap-x-4 cursor-pointer p-2 mt-2 ${
                activeLink === index
                  ? "bg-white rounded-lg border-l-black border-l-8 shadow-md"
                  : ""
              }`}
              title={!open ? item.title : ""}
            >
              <span className="text-3xl flex text-custom-header">
                {item.icon}
              </span>
              <span
                className={`text-base font-medium duration-500 flex-1 ${
                  !open && "hidden"
                }`}
              >
                {item.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
