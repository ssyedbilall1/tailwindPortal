import React from "react";
import { FaPlus } from "react-icons/fa";
import Profile from "../../../assets/profile.jpg";
import Input from "../../../globalComponents/input";
import Button from "../../../globalComponents/Button";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-xl mb-4 md:mb-8">Edit Your Profile</h1>
        <div className="flex flex-col items-center md:items-start">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 m-3 bg-gray-200 rounded-full border-4 border-custom-header flex items-center justify-center overflow-hidden">
              <img
                src={Profile}
                alt="Upload"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 xl:bottom-7 xl:right-7 2xl:bottom-8 2xl:right-8 bg-custom-header text-white rounded-full p-2 cursor-pointer">
              <FaPlus />
            </div>
          </div>
        </div>
        <Input
          placeholder="John Doe"
          type="text"
          label="Enter Your Name"
          width="w-full"
          className="mt-4"
        />
        <Input
          placeholder="+02xxx-xxxxxx "
          type="number"
          label="Mobile Number"
          width="w-full"
          className="mt-4"
        />
        <div className="flex w-full justify-evenly mt-5">
          <Button
            label="Cancel"
            width="w-32 lg:w-40"
            border="border border-black"
            hover="hover:bg-gray-300 duration-500"
            className="mr-2"
          />
          <Button
            label="Confirm"
            width="w-32 lg:w-40"
            background="bg-green-600"
            hover="hover:bg-white hover:border border-black duration-500"
            className="ml-2"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg mb-4">Permanent Address</h2>
        <Input
          placeholder="Street no 10"
          type="text"
          label="Enter Street"
          width="w-full"
          className="mt-4"
        />
        <Input
          placeholder="Islamabad"
          type="text"
          label="Enter City"
          width="w-full"
          className="mt-4"
        />
        <Input
          placeholder="Islamabad"
          type="text"
          label="Enter District"
          width="w-full"
          className="mt-4"
        />
        <Input
          placeholder="Federal"
          type="text"
          label="Enter Province"
          width="w-full"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default EditProfile;
