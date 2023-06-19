import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import './Projects.css'
import SectionHeader from '../components/sectionHeader';
import App from '../App';


const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: "Software Engineering Intern @ spaceX",
      date: "May 2023 - Present",
      description: "",
    },
    {
      title: "Data and Automation Engineer @ Tesla",
      date: "September 2022 - May 2023",
      description:
        "Created data pipelines and automation procedures for battery cell manufacturing.",
    },
    {
      title: "Process, Control, and Automation Engineer @ Marathon Petroleum Corp",
      date: "May 2022 - August 2022",
      description:
        "Upgraded PLCs from GE Series 90-30 to GE Rx3i. Wrote custom control logic for petroleum mixing/blending.",
    },
    {
      title: "Android Development Engineer @ Center for Design and Manufacturing Excellence",
      date: "Sepetember 2021 - May 2022",
      description:
        "Created android application interfaced with mobile spectrometer using bluetooth low energy and regressional machine learning to perform higher level accuracy.",
    },
    {
      title: "Software Development Intern @ MPC",
      date: "May 2021 - August 2021",
      description:
        "Built custom ASP.NET Core web application using C#, SQL Server, and Kendo UI (Javascript).Converted cloud-based Salesforce CRM data into local SQL Server databases.",
    },
  ];

  const leadershipPositions = [
    {
      title: "Team Lead - Senior Design Project",
      company: "The Ohio State University",
      date: "January 2023 - Present",
      description: "",
    },
    {
      title: "Diversity, Equity, and Inclusion Team Member",
      company: "Marathon Petroleum Corporation",
    },
    {
      title: "Computer Science Teaching Assistant",
      company: "OSU",
    },
  ];

  const [workSelected, setWorkSelected] = useState(true);
  const [leadershipSelected, setLeadershipSelected] = useState(false);

  return (
    <div className="app-container" id="workExperience">
      <SectionHeader title={"3. Work Experience"} />
      <div className="flex justify-center mb-4">
        <button onClick= {() => {setWorkSelected(true); setLeadershipSelected(false)}} className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 mr-2 focus:outline-none">
          Work
        </button>
        <button onClick= {() => {setLeadershipSelected(true); setWorkSelected(false)}} className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none">
          Leadership
        </button>
      </div>
      <div className="grid">
        <ul>
          <div className="mp-4">
            {workSelected && 
              workExperiences.map((experience, index) => (
              <li key={index}>
                <h2 className='text-white text-2xl font bold'>{experience.title}</h2>
                <p>{experience.date}</p>
                <p>{experience.description}</p>
              </li>
            ))}
            {leadershipSelected && leadershipPositions.map((experience, index) => (
              <li key={index}>
                <h2 className='text-white'>{experience.title}</h2>
                <p>{experience.date}</p>
                <p>{experience.description}</p>
              </li>
            ))}
          </div>
          <p className='text-3xl'>Put in a collage of companies</p>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
