import React from "react";
import Button from "../../../globalComponents/Button";

const EditLanguage = () => {
  return (
    <>
      <h1 className="text-xl mb-4">Please Choose Preferred Language</h1>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 "
        >
          English
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 "
        >
          Urdu
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 "
        >
          Chinese
        </label>
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
    </>
  );
};

export default EditLanguage;
