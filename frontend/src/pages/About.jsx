import React from 'react';
import Navbar from '../components/Navbar'
import golfImage from '../images/hayes_golf.jpeg'
import './About.css'
import SectionHeader from '../components/sectionHeader';

function AboutMe() {
  return (
    <div id="about">
      <div className="about-me-container">
        <div className="about-me-header">
          <SectionHeader title={"1. About Me"}/>
        </div>
        <div className="about-me-content">
          <div className="text">
            <p className="intro-text text-lg text-gray-700 mt-4">
              Hello, my name is Hayes Bentley and I am a innovative, hard-worker, computer engineering student, and a part time caddy. I became interested in software engineering during quarantine
              My passion in engineering started in high school while completing a degree in Integrated Engineering Technology from <a href='https://ncstatecollege.edu/degree-drives-grad-to-automotive-career/' target='_blank'>North Central State College. </a>
              Through various courses in PLC's and microcontrollers, I discovered a passion for software and automation!
            </p>
          <div className='image'>
            <img
              className="profile-image"
              src={golfImage}
              alt="Profile"
              style={{width: '200px', height: '200px' }} ></img>
          </div>
            <p className="text">
              Being from Central Ohio, I knew from any early age that I wanted to further my academic career at <a href='https://www.cnn.com/2022/06/23/us/ohio-state-university-trademarks-the/index.html' target="_blank" className='text-blue-500 hover:text-pink-500 cursor-pointer'>THE</a> Ohio State University! 
              Initially, I entered college as a Biomedical Engineering Major, but soon focused my degree towards software and major in Computer Engineering. 
              In my four years at OSU, I have been fortunate enough to complete four internships, at companies such as SpaceX, <a href='https://www.tesla.com/giga-texas'target='_blank'>Tesla</a>, and Marathon Petroleum! I was the primary student developer on a groundbreaking app used for crop 
            </p>  
            <p className="text">
              On the weekends, you can find me caddying at Muirfield Village Golf Course! As a six year veteran at MVGC, I have worked the Memorial Tournament, working with professionals such as Justin Rose and Cam Smith.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
