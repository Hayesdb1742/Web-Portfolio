import Navbar from '../components/Navbar';
import React, { useRef, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './Projects.css'
import darkTheme from '../'

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


const ProjectList = () => {
  const sectionRef = useRef(null);
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // trigger enter state for TransitionGroup
      } else {
        // trigger exit state for TransitionGroup
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // detect intersection when section is 50% visible
  });
  useEffect(() => {
    if (sectionRef.current) {
      console.log("Active")
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, observer]);
  return (
    <div className='app-container'>
      <section ref={sectionRef}>
        <TransitionGroup>
          {projects.map((project) => (
            <Project Project={project} />
          ))}
        </TransitionGroup>
      </section>
    </div>
  );
}

function Project({Project}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CSSTransition
        in={isHovered}
        timeout={300}
        classNames="project-hover"
        unmountOnExit
      >
        <div className="project-hover-content">
          <h2>{Project.title}</h2>
          <p>{Project.description}</p>
          <img src={Project.image} alt={Project.title} />
        </div>
      </CSSTransition>

      <h2>{Project.title}</h2>
      <p>{Project.description}</p>
      <img src={Project.image} alt={Project.title} />
    </div>
  );
}


export default ProjectList;
