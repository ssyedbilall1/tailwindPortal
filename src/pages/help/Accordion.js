import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ title, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between text-left py-2 px-4 font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none"
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
    </div>
  );
};

export default Accordion;
