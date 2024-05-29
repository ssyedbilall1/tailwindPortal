import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ title, answer, isOpen, onToggle }) => {
  return (
    <>
      <button
        className="w-full flex items-center justify-between text-left py-2 px-4 font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none border border-black rounded-md p-6 m-1"
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
