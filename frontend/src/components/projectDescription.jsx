import React from 'react';


const Modal = ({project, onClose}) => {
    const projectInfo = {
        1: "Magic Mirror",
        2: "Android App"
    }
    const projectDescription = projectInfo[project.id]
    
    return (
      <div
        id="projectModal"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-gray-500 p-4 rounded-lg shadow-lg absolute w-1/2 h-1/2">
          <p>{projectDescription}</p>
          <button className="absolute top-2 right-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
};
export default Modal;