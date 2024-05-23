import React from "react";
import Tabs from "../service/Tabs";
import { tabsnames } from "../../websiteData";

const Service = () => {
  return (
    <>
      <h1 className="font-bold text-xl mb-[50px]">Welcome, Admin</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {tabsnames.map((item) => (
          <Tabs key={item.title} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default Service;
