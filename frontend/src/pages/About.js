import React from 'react';
import Navbar from '../components/Navbar'


function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="about-me-container">
        <div className="about-me-header">
          <h1>About Me</h1>
        </div>
        <div className="about-me-content">
          <img
            className="profile-image"
            src="https://example.com/profile-image.jpg"
            alt="Profile"
          />
          <div className="text-container">
            <p className="intro-text">
              Hi, my name is Hayes Bentley and I am a senior electrical and computer engineering student at The Ohio State University. I have a passion for web development and I'm always looking for new opportunities to expand my skills and knowledge in the field.
            </p>
            <p className="education-text">
              I have completed several projects using React, Node.js, and other web development technologies. I have also taken courses in computer science, mathematics, and physics to further my knowledge of the field. In addition to my studies, I am a member of the university's robotics club, where I have worked on several projects related to autonomous navigation and control systems.
            </p>
            <p className="interests-text">
              Some of my other interests include playing golf, caddying as a side hustle, and watching sports. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
