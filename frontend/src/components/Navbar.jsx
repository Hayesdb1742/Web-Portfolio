import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import gHubLogo from "../images/github-mark.svg"
import Resume from "./Resume"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/hayes_logo.jpg'
import { CSSTransition } from 'react-transition-group';
import 'animate.css'

const Navbar = () => {
  const location = window.location.pathname;
  const [isMounted, setIsMounted] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const nodeRef = useRef(null)
  useEffect(() => {
    setIsMounted(true)
    setTimeout(() => {
      setShowComponent1(true);
    }, 250);

    // Delay the activation of Component 2 after 2 seconds
    setTimeout(() => {
      setShowComponent2(true);
    }, 500);

    // Delay the activation of Component 3 after 3 seconds
    setTimeout(() => {
      setShowComponent3(true);
    }, 750);
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
    <div className='navbar'>
      <nav className="flex items-center justify-between p-4 w-full">
          <div className="navbar-logo">
            <img src={logo} alt="Logo"></img>
          </div>
        <ul className="nav-menu">
          {showComponent1 && <li className="nav-item">
            <a href="#about">About</a>
          </li>
          }
          {showComponent1 && <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>}
          {showComponent2 && <li className="nav-item">
            <a href="#workExperience">Work Experience</a>
          </li>}
          {showComponent3 && <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>}
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
export default Navbar;
