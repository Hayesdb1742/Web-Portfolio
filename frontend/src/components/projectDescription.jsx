import React from 'react';
import './projectDescription.css'

const Modal = ({ project, onClose }) => {
  const projectInfo = {
    1: {
      Title: "Magic Mirror",
      Description: "I am in the process of building an interactive mirror built on Raspberry Pi backend bash script and React frontend. There are many repositories out there that you can use for a basic smart mirror, but I want to improve on them. I have three goals I want to implement: 1. Adding a sensor to turn mirror on/off when raspberry pi microphone hears a clap. 2. Add in special modules for IoT compatability (i.e view the status of appliances in my house. 3. Add in cool intro sequence, maybe stealing some inspiration from iron man. ",
      Skills: ["React", "Raspberry Pi"]
    },
    2: {
      Title: "Android App",
      Description: "I was the primary developer for a groundbreaking new app that would allow for mobile, real-time chemometrical analysis of crop samples. The inspiraiton for this app was the burden felt by farmers who need to understand the chemical properties of their crops in order to maximize proudction. Traditionally, farmers would have to send their samples to a lab for spectrometer analysis, which took weeks and thousands of dollars to complete. With the app I helped develop, all farmers need is a sensor kit (8in x 8in) and an android tablet to take accurate readings of their own crops. This allows farmers to take control of their own process. I was new to app development before this project, so it was an incredible experience to learn more about the topic. One of the requirements for the project was for an android application, so the app is written in Java using android studio. ",
      Skills: ["Java", "Gradle", "Android Studio", "Statistical Modeling"]
    },
    3: {
      Title: "Machine Learning Projects",
      Description: "In an intro to machine learning course, I was able to complete a number of machine learning projects on important datasets. The primary programming language used was python with packages ranging from pandas, pyTorch, and Optuna. In this class, I was able to perform feature recognition on heart failure recognition applications, height/weight metric data for high performing athlete recognition. My team and I built a functional neural network working on an undisclosed dataset thar used parameter hypertuning using optuna. ",
      Skills: ["Python", "PyTorch", "Neural Networks"]
    },
    4: {
      Title: "Structured Light Camera",
      Description: "As part of our capstone senior design project, my team was tasked with building a structure light camera with a budget of $500. A structured light camera is capable of producing a 3-D model of an object by taking several 2-D images of the object with a pattern projected onto it. The team will be writing model reconstruction algorithms and working with hardware level protocol for data transfer. Project is scheduled for demo in late 2023, more details to come. ",
      Skills: ["Python", "Embedded Programming"]
    },
    5: {
      Title: "Electric Vehicle Design",
      Description: "As team leader, I was tasked with guiding my team through designing and building our own electric racing vehicle. Our main goal was to have the vehicle cover the most distance in one hour, on a twisty and rough course. As team leader, I first set our priorities at finishing the hour long race, and then seconadarily on maximizing performance. Our first semester was calculating physical requirements of the battery and motor system, modeling the chassis, and performing basic CFD work. Once the team finalized the characteristics of the vehicle, we started the build. The main challenge was welding the chassis togther, but I was incredibly fun because I got to learn how to TIG weld. We used 3 24 V var batteries wired in series to provide maximum amp-hours to our vehicle, enabling it to go farther. ",
      Skills: ["Project Management", "Electrical System Design", "CAD"]
    },
    6: {
      Title: "From Scratch Computer Build",
      Description: "I've always wanted to build a computer from scratch, and in early 2022 I decided to do just that. For christmas, my parents got me a new ASUS motherboard and I was off! I was able to correctly install all necesdary computing parts, RAM and ROM components, and a new graphics card to support CUDA applications. I was able to POST on first attempt and correctly set up my OS! I am loving my new computer I built myself.",
      Skills: []
    }
  }
  const projectDescription = projectInfo[project.id]

  return (
    <div
      id="projectModal"
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-gray-500 p-4 rounded-lg shadow-lg absolute w-3/4 h-3/4">
        <h1 className="text-white text-2xl">{projectDescription["Title"]}</h1>
        <p>{projectDescription["Description"]}</p>
        <div className='flex flex-row'>
          {projectDescription.Skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full m-2"
            >
              {skill}
            </div>
          ))}
        </div>
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;