import React from "react";
import Card from "../home/card";
import { homepagecards } from "../../websiteData";

const Home = () => {
  return (
    <>
      <h1 className="font-bold text-xl mb-[50px]">Welcome, Admin</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {homepagecards.map((item) => (
          <div className="px-[8px] w-full sm:w-full md:w-1/2 md:p-4 xl:w-1/4">
            <Card key={item.title} title={item.title} image={item.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
