import React from "react";

function Resume() {
  const pdfPath = "../images/Hayes_Bentley_Resume_1-31-2023.pdf"

  function handleClick() {
    window.open(process.env.PUBLIC_URL + "/" + pdfPath, "_blank");
  }

  return (
    <div>
      <button onClick={handleClick}>Hayes Bentley Resume</button>
    </div>
  );
}

export default Resume;
