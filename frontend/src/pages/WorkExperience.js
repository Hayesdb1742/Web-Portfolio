import React from 'react';
import Navbar from '../components/Navbar'
import './Projects.css'

const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: 'Software Engineering Intern (Starship Launch Team)',
      company: 'SpaceX',
      date: 'May 2023 - Present',
      description: ''
    },
    {
      title: 'Data and Automation Engineer',
      company: 'Tesla',
      date: 'September 2022 - May 2023',
      description: 'Created data pipelines and automation procedures for battery cell manufacturing.'
    },
    {
      title: 'Process, Control, and Automation Engineer',
      company: 'Marathon Petroleum Corporation',
      date: 'May 2022 - August 2022',
      description: 'Assisted senior developers in coding, testing, and deploying web applications.'
    },
    {
      title: "Android Development Engineer",
      company: "Center for Design and Manufacturing Excellence",
      date: "Sepetember 2021 - May 2022",
      description: ""  
    },
    {
      title: 'Software Development Intern',
      company: "Marathon Petroleum Corporation",
      date: 'May 2021 - August 2021',
      description: ""
    }
  ];

  return (
    <div className='app-container' id='workExperience'>
      <Navbar/>
      <h1>Work Experience</h1>
      <ul>
        {workExperiences.map((experience, index) => (
          <li key={index}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.date}</p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperiencePage;
