import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import EditLanguage from "../profile/components/EditLanguage";
import EditPassword from "../profile/components/EditPassword";
import EditProfile from "../profile/components/EditProfile";
const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4">
        <ul className="flex flex-col md:flex-col bg-white border-2">
          <li
            className={`p-4 cursor-pointer flex justify-between items-center ${
              activeTab === "editProfile"
                ? "border-l-4 border-custom-header"
                : ""
            }`}
            onClick={() => setActiveTab("editProfile")}
          >
            <span>Edit Profile</span>
            <FaArrowRight />
          </li>
          <hr />
          <li
            className={`p-4 cursor-pointer flex justify-between items-center ${
              activeTab === "changePassword"
                ? "border-l-4 border-custom-header"
                : ""
            }`}
            onClick={() => setActiveTab("changePassword")}
          >
            <span>Change Password</span>
            <FaArrowRight />
          </li>
          <hr />
          <li
            className={`p-4 cursor-pointer flex justify-between items-center ${
              activeTab === "changeLanguage"
                ? "border-l-4 border-custom-header"
                : ""
            }`}
            onClick={() => setActiveTab("changeLanguage")}
          >
            <span>Change Language</span>
            <FaArrowRight />
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/4 p-4">
        {activeTab === "editProfile" && (
          <div>
            <EditProfile />
          </div>
        )}
        {activeTab === "changePassword" && (
          <div>
            <EditPassword />
          </div>
        )}
        {activeTab === "changeLanguage" && (
          <div>
            <EditLanguage />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
