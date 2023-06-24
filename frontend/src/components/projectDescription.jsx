import React from 'react';


const Modal = ({project, onClose}) => {
    const projectInfo = {
        1: {
          Title: "Magic Mirror",
          Description: "I am in the process of building an interactive mirror built on Raspberry Pi backend bash script and React frontend."
        },
        2: {
          Title: "Android App",
          Description: ""
        },
        3: {
          Title: "Machine Learning Projects",
          Description: ""
        },
        4: {
          Title: "Structured Light Camera",
          Description:""
        },
        5: {
          Title: "Electric Vehicle Design",
          Description: ""
        },
        6: {
          Title: "From Scratch Computer Build",
          Description: ""
        }
    }
  const projectDescription = projectInfo[project.id]
    
    return (
      <div
        id="projectModal"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-gray-500 p-4 rounded-lg shadow-lg absolute w-1/2 h-1/2">
          <h1>{projectDescription["Title"]}</h1>
          <p>{projectDescription["Description"]}</p>
          <button className="absolute top-2 right-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
};
export default Modal;