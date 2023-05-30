import React from 'react';
import Navbar from '../components/Navbar'
import golfImage from '../images/hayes_golf.jpeg'
import './About.css'

function AboutMe() {
  return (
    <div id="about">
      <div className="about-me-container">
        <div className="about-me-header">
          <h1>About Me</h1>
        </div>
        <div className="about-me-content">
          <img
            className="profile-image"
            src={golfImage}
            alt="Profile"
            style={{width: '200px', height: '200px' }} ></img>
          <div className="text-container">
            <p className="intro-text">
              Hello, my name is Hayes Bentley and I am a innovative, hard-working, and driven aspriring engineer. I have a passion for developing and working with cool technologies and I'm always looking for new projects to learn from and complete.
              My passion in engineering started in high school while completing a degree in Integrated Engineering Technology from <a href='https://ncstatecollege.edu/degree-drives-grad-to-automotive-career/' target='_blank'>North Central State College. </a>
              Through various courses in PLC's and microcontrollers, I discovered a passion for software and automation!
            </p>
            <p className="education-text">
              Being from Central Ohio, I knew from any early age that I wanted to further my academic career at <a href='https://www.cnn.com/2022/06/23/us/ohio-state-university-trademarks-the/index.html' target="_blank">THE</a> Ohio State University! 
              In my four years at OSU, I have been fortunate enough to complete four internships, at companies such as SpaceX, Tesla, and Marathon Petroleum! 
            </p>  
            <p className="interests-text">
              On the weekends, you can find me caddying at Muirfield Village Golf Course! As a six year veteran at MVGC, I have worked the Memorial Tournament, working with professionals such as Justin Rose and Cam Smith. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
