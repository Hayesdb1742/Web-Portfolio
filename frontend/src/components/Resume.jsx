import React from "react";
import HayesBentleyFinalResume from '../HayesBentleyFinalResume.pdf'
import { saveAs } from 'file-saver';
import './Resume.css'

const resumeBtn = () => {
  const handleDownload = () => {
    saveAs(HayesBentleyFinalResume, 'HayesB_Resume.pdf');
  };
  return (
    <div>
      <button className= "rounded full bg-gradient-to-r from-red-500 animate-bounce" onClick={handleDownload}>Resume</button>
      {/* <a href={HayesBentleyFinalResume} download>Download PDF</a> */}
    </div>
  );
}
export default resumeBtn;
