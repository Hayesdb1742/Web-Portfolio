import React from 'react';
import Navbar from '../components/Navbar'
import golfImage from '../images/hayes_golf.jpeg'
import './About.css'
import SectionHeader from '../components/sectionHeader';
import hayesTesla from '../images/hayes_tesla.jpeg'
import hayesMarathon from '../images/hayes_marathon.jpeg'


function AboutMe() {
  return (
    <div id="about">
      <div className="about-me-container">
        <SectionHeader index = {"1."} title={"About Me"}/>
        <div className="about-me-content">
          <div className="text">
            <p className="intro-text text-lg mt-4">
              Hello, my name is Hayes Bentley and I am a innovative, hard-worker, computer engineering student, and a part time caddy. I became interested in software engineering during the COVID pandemic, and quickly began searching. 
              My passion in engineering started in high school while completing a degree in Integrated Engineering Technology from <a href='https://ncstatecollege.edu/degree-drives-grad-to-automotive-career/' target='_blank'>North Central State College. </a>
              Through various courses in PLC's and microcontrollers, I discovered a passion for software and automation!
            </p>
          </div>
          <div className='basis-2/5 overflow-hidden'>
              <img
                title='hayesGolf'
                className="scale-75 rounded-lg"
                src={golfImage}></img>
              <img
                src={hayesTesla} className="scale-75 rounded-lg"></img>
              <img src={hayesMarathon} className='scale-75 rounded-lg'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
