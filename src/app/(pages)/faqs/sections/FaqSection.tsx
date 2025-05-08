"use client";

import { useState } from "react";
// import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion";

// const tabs = [
//   { key: "terms", label: "Terms & Privacy Policy" },
//   { key: "general", label: "General" },
//   { key: "delivery", label: "Delivery" },
//   { key: "faq", label: "FAQ" },
//   { key: "aftercare", label: "Aftercare" },
// ];

const FaqSection = ({
  data,
}: {
  data: { question: string; answer: string }[];
}) => {
  //
  // const [activeTab, setActiveTab] = useState("terms");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 w-[95%] mx-auto py-5">
      {/* Tabs */}
      {/* <Tabs
        tabs={tabs}
        setOpenIndex={setOpenIndex}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      /> */}

      {/* Accordion */}
      <Accordion
        data={data}
        // activeTab={activeTab}
        handleToggle={handleToggle}
        openIndex={openIndex}
      />
    </div>
  );
};

export default FaqSection;
