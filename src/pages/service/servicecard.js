import React from "react";

const Card = ({ status, applicationID, cardTitle, assignedTo }) => {
  let cardBorderColor = "";
  let statusBackgroundColor = "";
  let textColor = "";

  switch (status) {
    case "Rejected":
      cardBorderColor = "border-red-500 border-2";
      statusBackgroundColor = "bg-red-500";
      textColor = "text-white";
      break;
    case "Completed":
      cardBorderColor = "border-green-500 border-2";
      statusBackgroundColor = "bg-green-500";
      textColor = "text-white";
      break;
    case "In Progress":
      cardBorderColor = "border-yellow-500 border-2";
      statusBackgroundColor = "bg-yellow-500";
      textColor = "text-black";
      break;
    default:
      break;
  }

  return (
    <div
      className={`bg-white p-4 shadow-md mt-4 flex justify-between items-center w-3/5 min-[490px]:w-3/4 ${cardBorderColor}`}
    >
      <div className="py-1">
        <p className="text-xs">Application ID: {applicationID}</p>
        <h3 className="font-bold py-2">{cardTitle}</h3>
        <p className="font-thin text-sm">
          Status:
          <span className="font-bold"> {assignedTo}</span>
        </p>
      </div>
      <div className="ml-4">
        <p
          className={`w-28 text-center rounded-xl p-2 ${textColor} font-bold ${statusBackgroundColor}`}
        >
          {status}
        </p>
        <p className="w-28 text-center p-2 underline-offset-2 underline text-blue-500">
          View Details
        </p>
      </div>
    </div>
  );
};

export default Card;
