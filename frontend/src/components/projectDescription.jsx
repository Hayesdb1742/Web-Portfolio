import React from 'react';


const Modal = ({project, onClose}) => {
    const projectInfo = {
        1: "Magic Mirror",
        2: "Android App"
    }
    console.log('test')
    const projectDescription = projectInfo[project]
    
    return (
        <div id="projectModal" className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2>
            {project}
        </h2>
        <p>{project.projDescription}</p>
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    )
};
export default Modal;