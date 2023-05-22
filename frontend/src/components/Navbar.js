import {React, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import gHubLogo from "../images/github-mark-white.png"
import Resume from "./Resume"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';




const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element){
        element.scrollIntoView({behavior:"smooth"});
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#workExperience">Work Experience</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
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
      <div className="navbar-spacing"></div>
    </div>
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
