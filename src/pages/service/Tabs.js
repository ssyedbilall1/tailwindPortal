import React from "react";

const Tabs = ({ title }) => {
  return (
    <div className="flex py-12">
      <div className="max-w-md flex flex-col gap-x-2 w-full">
        <div>
          <button>{title}</button>
        </div>
        <div>bottom</div>
      </div>
    </div>
  );
};

export default Tabs;
