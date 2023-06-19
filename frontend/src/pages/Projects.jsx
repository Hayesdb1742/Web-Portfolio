import Navbar from '../components/Navbar';
import React, { useRef, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './Projects.css'
import SectionHeader from '../components/sectionHeader';

const projects = [
  {
    id: 1,
    title: "Magic Mirror",
    description: "Built a smart mirror using a Raspberry Pi and customized modules.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/Hayesdb1742/Magic-Mirror",
  },
  {
    id: 2,
    title: "Agriculture Chemometrical Android App",
    description: "Developed a android app using Java and Gradle as build tools. Applied machine learning strategies in order to smooth noisy data.",
    image:"",
    link: "https://osu.edu"
  },
  {
    id: 3,
    title: "Machine Learning Projects",
    description: "Learned and implemented regressional neural networks and competed in a kaggle compeition.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/machine-learning-projects",
  },
  {
    id: 4,
    title: "Structured Light Camera",
    description: "Built a 3D scanner using a structured light camera and open source software.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/Hayesdb1742/Structured_Light_Camera",
  },
  {
    id: 5,
    title: "Electric Vehicle Design",
    description: "Designed and built an electric vehicle as part of a senior design project.",
    image: "https://via.placeholder.com/150",
  },
  {
    id:6,
    title: "From scratch PC build",
    description: "Built a PC from scratch"
  }
];


const ProjectList = () => {
  return (
    <div className='app-container' id='projects'>
      <SectionHeader title={"2. Projects"}/>
      <section className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <Project Project={project} />
          ))}
      </section>
    </div>
  );
}

function Project({Project}) {
  return (
    <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg shadow-md transition-transform cursor-pointer hover:scale-105">
      <div className="w-20 h-20 bg-white rounded-full mr-4 overflow-hidden">
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{Project.title}</h2>
        <p className="text-gray-600 mt-2">{Project.description}</p>
        {/* <!-- Other project details or links can go here --> */}
      </div>
    </div>
  );
}


export default ProjectList;
