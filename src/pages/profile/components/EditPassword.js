import React from "react";
import Input from "../../../globalComponents/input";
import Button from "../../../globalComponents/Button";

const EditPassword = () => {
  return (
    <>
      <h1 className="text-xl mb-4">Change Password</h1>
      <div className="flex flex-col space-y-2 w-full items-start">
        <div className="w-full md:w-2/5">
          <Input
            placeholder="********"
            label="Enter Old Password"
            width="w-full"
          />
        </div>
        <div className="w-full md:w-2/5">
          <Input
            placeholder="********"
            label="Enter New Password"
            width="w-full"
          />
        </div>
        <div className="w-full md:w-2/5">
          <Input
            placeholder="********"
            label="Confirm New Password"
            width="w-full"
          />
        </div>
        <div className="flex w-full md:w-2/5  justify-evenly mt-5">
          <Button
            label="Cancel"
            width="w-40"
            border="border border-black"
            hover="hover:bg-gray-300 duration-500"
          />
          <Button
            label="Confirm"
            width="w-40"
            background="bg-green-600"
            hover="hover:bg-white hover:border border-black duration-500"
          />
        </div>
      </div>
    </>
  );
};

export default EditPassword;
