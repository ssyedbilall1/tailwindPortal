import React, { useState } from "react";
import Accordion from "../help/Accordion";
import { faqs } from "../../websiteData";
const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h1 className="font-bold text-xl mb-[50px]">FAQs</h1>
      <div className="bg-white rounded-lg w-4/5 mx-auto p-4">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            answer={faq.answer}
            isOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Help;
