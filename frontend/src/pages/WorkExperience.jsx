import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import './Projects.css'
import SectionHeader from '../components/sectionHeader';
import App from '../App';
import SpaceXLogo from '../images/SpaceX-Logo.svg';
import TeslaLogo from '../images/Tesla_Motors.svg';
import marathonLogo from '../images/marathon_log.jpg';
import osuLogo from '../images/osuLogo.png';
import './WorkExperience.css'

const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: "Software Engineering Intern @ spaceX",
      date: "May 2023 - Present",
      description: [
        "Implemented SCADA system using Java based Web Server and PLC to provide illustrative example for Starship Stabilization.",
        "Programmed PLC's and control units for automating Starship manufacturing products."
      ],
      link: "https://www.spacex.com/vehicles/starship/",
      skills: ["Python", "SCADA", "PLC", "Embedded Programming", "Power System Design", "Automation and Controls", "MQTT Protocol"]
    },
    {
      title: "Data and Automation Engineer @ Tesla",
      date: "September 2022 - May 2023",
      description: [
        "Created custom data pipeline to internal MES system using Grpc framework, Python, and Apache Kafka.",
        "Implemented the software architecture for smooth transportation of battery cells to Tesla Manufacturing Sites using Python and restAPI's of ERP."
      ],
      link: "https://www.tesla.com/giga-texas",
      skills: ["Python", "Relational DB (PostgreSQL)", "Trino", "Java", "Manufacturing Automation", "Kafka", "Influx DB"]
    },
    {
      title: "Process, Control, and Automation Engineer @ Marathon Petroleum Corp",
      date: "May 2022 - August 2022",
      description: [
        "Upgraded PLCs from GE Series 90-30 to GE Rx3i. Wrote custom control logic for petroleum mixing/blending.",
        "Deployed an industrial scale to asphalt facility, using PROFINET connection and correct PLC logic change."
      ],
      link: "https://www.marathonpetroleum.com/Operations/Midstream/",
      skills: ["GE PLC Programming", "Modbus Protocol", "Industrial Automation", "Industrial Network Systems", "Electrical System Design"]
    },
    {
      title: "Android Development Engineer @ Center for Design and Manufacturing Excellence",
      date: "Sepetember 2021 - May 2022",
      description:[
        "Developed an android app using java, xml, and bluetooth low energy driver to connect to mobile spectrometer units.",
        "Collaborated with external clients to gauge end user needs."
      ],
      link: "https://cdme.osu.edu/industrial-cybersecurity",
      skills: ["Java", "Android Studio", "App Development", "XML", "Git (Version Control)"]
    },
    {
      title: "Software Development Intern @ MPC",
      date: "May 2021 - August 2021",
      description:[
        "Built custom ASP.NET Core web application using C#, SQL Server, and Kendo UI (Javascript). Converted cloud-based Salesforce CRM data into local SQL Server databases.",
        "Interfaced with end users to identify critical needs of web app, used Agile methods for clear workflow patterns."
      ],
      link: "https://www.marathonpetroleum.com/Operations/Retail/",
      skills: ["C#", "ASP .NET", "Javascript", "JQuery", "SQL Server"]
    },
  ];

  const leadershipPositions = [
    {
      title: "Team Lead - Senior Design Project",
      company: "The Ohio State University",
      date: "January 2023 - Present",
      description: [
        "Lead a team of 5 engineers successfully hitting design and production milestones within our schedule",
        "Established end user needs in conjuction with advisors and research partners",
        "Acted as the teams scrum master, allowing the team to stay up to date on tasks using Agile methodolgies"
      ],
      skills:["Project Management", "Scrum Master", "Agile"]
    },
    {
      title: "Diversity, Equity, and Inclusion Team Member",
      company: "Marathon Petroleum Corporation",
      date: "May 2022 - August 2022",
      description: [
        "Coordinated DE&I group efforts to identify potential sources of bias within the workplace",
        "Held information events for employees to educate on the benefits of a diverse workplace"
      ],
      skills:[]
    },
    {
      title: "Computer Science Teaching Assistant",
      company: "OSU",
      date: "September 2020 - May 2021",
      description: [
        "Instructed students on the basics of OOP using illustrative examples during my office hour",
        "Provided students helpful feedback on exams and labs to ensure critical topics were learned."
      ],
      skills:["Object Oriented Programming", "Java"]
    },
    {
      title: "Delivery Coordinator",
      company: "St. Paul Church Food Bank",
      date: "2015-2022",
      description: [
        "Deliveried groceries to over 100 needy families per week",
        "Coordinated food storage to best serve community needs"
      ],
      skills:[]
    }
  ];

  const [workSelected, setWorkSelected] = useState(true);
  const [leadershipSelected, setLeadershipSelected] = useState(false);

  return (
    <div className="" id="workExperience">
      <SectionHeader title={"2. Work Experience"} />
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            setWorkSelected(true);
            setLeadershipSelected(false);
          }}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 mr-2 focus:outline-none"
        >
          Work
        </button>
        <button
          onClick={() => {
            setLeadershipSelected(true);
            setWorkSelected(false);
          }}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none"
        >
          Leadership
        </button>
      </div>
      <div className="grid">
        <ul>
          <div className="mp-4 flex-direction: columns-1">
            {workSelected && (
              <div id="logoCollage" className="flex flex-wrap h-1/3">
                <div className="w-1/4 md:w-1/4 p-4">
                  <img src={SpaceXLogo} alt="SpaceX Logo" />
                </div>
                <div className="w-1/4 md:w-1/4 p-4">
                  <img src={TeslaLogo} alt="SpaceX Logo" />
                </div>
                <div className="w-1/4 md:w-1/4 p-4">
                  <img
                    src={marathonLogo}
                    alt="Logo 3"
                    className="max-w-full h-auto background-image test"
                  />
                </div>
                <div className="w-1/4 md:w-1/4 p-4">
                  <img
                    src={osuLogo}
                    alt="Logo 4"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            )}
            {workSelected &&
              workExperiences.map((experience, index) => (
                <div>
                  <li key={index}>
                    <a
                      target="_blank"
                      className="text-white text-2xl font bold"
                      href={experience.link}
                    >
                      {experience.title}
                    </a>
                    <h3 className="text-lg">{experience.date}</h3>
                    <ul className="list-disc list-inside">
                      <li>{experience.description[0]}</li>
                      <li>{experience.description[1]}</li>
                    </ul>
                  </li>
                  <div className="flex flex-wrap">
                    {experience.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full m-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {leadershipSelected &&
              leadershipPositions.map((experience, index) => (
                <li key={index}>
                  <h2 className="text-white">{experience.title}</h2>
                  <p>{experience.company}</p>
                  <p>{experience.date}</p>
                  {experience.description.map((single, index) => (
                    <p>{single}</p>
                  ))}
                </li>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
