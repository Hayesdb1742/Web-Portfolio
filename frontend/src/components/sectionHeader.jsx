import React from 'react';
import './sectionHeader.css'

const SectionHeader = ({ title, index }) => {
    const sectionHeaders = [
        { title: 'First Section' },
        { title: 'Second Section' },
        { title: 'Third Section' },
      ];
    return (
      <div className="section-header">
        <h2>{title}</h2>
        <div className="underline"></div> 
      </div>
    );
  };
  
  export default SectionHeader;