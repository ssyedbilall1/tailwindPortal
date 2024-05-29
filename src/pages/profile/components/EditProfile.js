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
        <div className="flex flex-col items-start">
          <div className="relative">
            <div className="w-32 h-32 m-3 bg-gray-200 rounded-full border-4 border-custom-header flex items-center justify-center overflow-hidden">
              <img
                src={Profile}
                alt="Upload"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 right-3 bg-custom-header text-white rounded-full p-2 cursor-pointer">
              <FaPlus />
            </div>
          </div>
          <p className="mt-2 ml-10 text-gray-600 text-center">Add image</p>
        </div>
        <Input
          placeholder="John Doe"
          type="text"
          label="Enter Your Name"
          width="w-full"
        />
        <Input
          placeholder="+02xxx-xxxxxx "
          type="number"
          label="Mobile Number"
          width="w-full"
        />
        <div className="flex w-full  justify-evenly mt-5">
          <Button
            label="Cancel"
            width="w-40"
            border="border border-black"
            hover="hover:bg-gray-300 duration-500"
            className="mr-2"
          />
          <Button
            label="Confirm"
            width="w-40"
            background="bg-green-600"
            hover="hover:bg-white hover:border border-black duration-500"
            className="ml-2"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        Permanent Address
        <Input
          placeholder="Street no 10"
          type="text"
          label="Enter Street"
          width="w-full"
        />
        <Input
          placeholder="Islamabad"
          type="text"
          label="Enter City"
          width="w-full"
        />
        <Input
          placeholder="Islamabad"
          type="text"
          label="Enter District"
          width="w-full"
        />
        <Input
          placeholder="Federal"
          type="text"
          label="Enter Province"
          width="w-full"
        />
      </div>
    </div>
  );
};

export default EditProfile;
