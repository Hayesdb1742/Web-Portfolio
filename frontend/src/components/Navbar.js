import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import gHubLogo from "../images/github-mark-white.png"
import Resume from "./Resume"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-NavLink" activeClassName="active"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></NavLink>
        </li>
        <li className="nav-item">
          <a onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth' })}>About</a>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-NavLink">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/work-experience" className="nav-NavLink">Work Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-NavLink">Contact</NavLink>
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
    </nav>
  );
}

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav className={location.pathname === '/' ? 'top-nav' : 'side-nav'}>
      {/* Navigation menu content */}
    </nav>
  );
}




export default Navbar;
