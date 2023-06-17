import React from "react";
import "./sectionHeader.css";

const SectionHeader = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
    </div>
  );
};

export default SectionHeader;
