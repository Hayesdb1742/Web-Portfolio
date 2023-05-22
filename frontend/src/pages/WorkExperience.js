import React from 'react';
import Navbar from '../components/Navbar'
import './Projects.css'

const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: 'Software Engineering Intern (Starship Launch Team)',
      company: 'SpaceX',
      date: 'June 2020 - Present',
      description: 'Developed and maintained the company website using React.js and CSS.'
    },
    {
      title: 'Web Designer',
      company: 'XYZ Corp.',
      date: 'January 2019 - May 2020',
      description: 'Created and designed web pages for clients using HTML, CSS, and Bootstrap.'
    },
    {
      title: 'Web Developer Intern',
      company: 'LMN Tech',
      date: 'June 2018 - December 2018',
      description: 'Assisted senior developers in coding, testing, and deploying web applications.'
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
