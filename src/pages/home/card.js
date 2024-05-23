import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="text-gray-600 body-font w-full">
      <div className="p-4 text-center items-center bg-white shadow-xl cursor-pointer hover:-translate-y-5 duration-500">
        <div className="w-14 h-20 inline-flex items-center justify-center rounded-full mb-5 ">
          <img src={image} alt={title} />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
