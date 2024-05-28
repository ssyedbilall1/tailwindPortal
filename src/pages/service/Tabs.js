import React, { useRef, useEffect } from "react";
import Card from "../service/servicecard";
import { tabsnames } from "../../websiteData";

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const firstBtnRef = useRef();

  useEffect(() => {
    if (tabsnames.length > 0 && firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row flex-wrap gap-4">
        {tabsnames.map((item, index) => (
          <div key={index} className="flex py-2">
            <div className="max-w-md flex flex-col gap-y-2 w-full">
              <div className="p-1 rounded-xl flex justify-between items-center font-bold bg-white text-black">
                <button
                  ref={index === 0 ? firstBtnRef : null}
                  className={`rounded-t-xl  w-28 p-2 text-center  focus:bg-custom-header focus:text-white ${
                    selectedTab === index ? "bg-custom-header text-white" : ""
                  }`}
                  onClick={() => setSelectedTab(index)}
                >
                  {item.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {tabsnames[selectedTab].content.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            status={card.status}
            applicationID={card.applicationID}
            cardTitle={card.cardTitle}
            assignedTo={card.assignedTo}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
