import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
<<<<<<< HEAD
import gHubLogo from "../images/github-mark-white.png"
import Resume from "./Resume"

=======
import gLogo from '../images/github-mark-white.png'
>>>>>>> 18a3368d63ad496b20d9a17697aeb3eb13f0076d
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
<<<<<<< HEAD
                <img src={gHubLogo} alt="Github" width="32" height="32" />
=======
                <img src={gLogo} width="32" height="32" />
>>>>>>> 18a3368d63ad496b20d9a17697aeb3eb13f0076d
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
