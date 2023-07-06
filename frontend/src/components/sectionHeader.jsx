import React from "react";
import "./sectionHeader.css";

const SectionHeader = ({ index, title }) => {
  return (
    <div className="flex flex-row flex-nowrap">
      <div className="text-5xl font-bold text-blue-500">{index}</div>
      <div className="text-3xl font bold ml-8">{title}</div>
      </div>
  );
};

export default SectionHeader;
