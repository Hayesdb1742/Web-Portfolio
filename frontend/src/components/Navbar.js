import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import gHubLogo from "../images/github-mark-white.png"
import Resume from "./Resume"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/work-experience" className="nav-link">Work Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/Hayesdb1742?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={gHubLogo} alt="Github" width="32" height="32" />
            </a>
          </li>
          <li>
            <Resume />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
