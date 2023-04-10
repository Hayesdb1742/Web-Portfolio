import React from 'react';
import { Link } from 'react-router-dom';
import About from './About.js';

const Home = () => {
  console.log('Home')
  return (
    <div className="home">
      <h1>Welcome to My Home Page</h1>
      <p>Here you can find information about me, my skills and my projects.</p>
      <nav>
        <ul>
          <li><Link to="/about" className="btn btn-primary">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/work-experience">Work Experience</Link></li>
          <li><Link to="/goals">Goals</Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default Home;