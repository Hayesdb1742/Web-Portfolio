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
          <SectionHeader title={"1. About Me"} />
        </div>
        <div className="about-me-content">
          <div className="text">
            <p className="intro-text text-lg mt-4">
              Hello, my name is Hayes Bentley and I pride myself on being a results-driven engineer. Currently, I am a senior at <a href='https://www.osu.edu/' target='_blank'>The Ohio State University</a>, majoring in Computer Engineering. With a graduation date of December 2023, I am actively seeking full time entry level positions in the software and automation space!
            </p>
            <div className='image'>
              <img
                className="profile-image"
                src={golfImage}
                alt="Profile"
                style={{ width: '200px', height: '200px' }} ></img>
            </div>
            <p className="text">
              After beginning as a Biomedical Engineering Major, I rediscovered my passion for software and began studying and gaining expereince in industry. 
              In my four years at OSU, I have been fortunate enough to complete four internships, at companies such as<a href='https://www.spacex.com/'target='_blank'>SpaceX</a>, <a href='https://www.tesla.com/giga-texas' target='_blank'>Tesla</a>, and <a href='https://www.marathonpetroleum.com/' target='_blank'>Marathon Petroleum! </a> 
              I was the primary developer on a groundbreaking app used for real-time crop analysis. Over the course of my undergrad career, I have spent a combined two years of software engineering industry experience!
            </p>
            <p className="text">
              On the weekends, you can find me caddying at Muirfield Village Golf Course! As a six year veteran at MVGC, I have worked the Memorial Tournament, working with professionals such as Justin Rose and Cam Smith. I am an avid golfer and will take any chance I can get to hit the links! Combining my love of golf and software, I have a number of projects in the works hoping to disrupt the golf industry (...details coming soon). 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
