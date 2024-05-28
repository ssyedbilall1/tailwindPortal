import React, { useState } from "react";
import Tabs from "../service/Tabs";

const Service = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <h1 className="font-bold text-xl mb-[50px]">Services</h1>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
};

export default Service;
