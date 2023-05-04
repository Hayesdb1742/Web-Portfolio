import Navbar from '../components/Navbar';
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";



const projects = [
  {
    id: 1,
    title: "Machine Learning Projects",
    description: "Various machine learning projects completed using Python and TensorFlow.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/machine-learning-projects",
  },
  {
    id: 2,
    title: "Electric Vehicle Design",
    description: "Designed and built an electric vehicle as part of a senior design project.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Magic Mirror",
    description: "Built a smart mirror using a Raspberry Pi and customized modules.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/Hayesdb1742/Magic-Mirror",
  },
  {
    id: 4,
    title: "Structured Light Camera",
    description: "Built a 3D scanner using a structured light camera and open source software.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/Hayesdb1742/Structured_Light_Camera",
  },
];

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="project-list">
        <h1>Projects</h1>
        <TransitionGroup className="project-list">
          {projects.map(project => (
            <CSSTransition key={project.id} timeout={500} classNames="project">
              <div className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link}>View on GitHub</a>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Projects;
