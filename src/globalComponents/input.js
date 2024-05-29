import React from "react";

const Input = ({ type, placeholder, label, width }) => {
  return (
    <div className="mt-5">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        className={`bg-gray-50 border border-black text-gray-900 text-sm rounded-md ${width} p-2`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
