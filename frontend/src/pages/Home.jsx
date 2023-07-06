import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, ThemeProvider, useTheme } from "styled-components";
import darkTheme from "../themes/dark-theme.jsx";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./Home.css";
import "animate.css";
import '../index.css'
import headshot from '../logo.svg'

const HomePage = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 0);
    setTimeout(() => {
      setShowParagraph(true);
    }, 1000);
  }, []);   
  return (
    <div className="homepage flex">
      <div className="p-4 text-container">
        {showHeader && (
          <div><h1 className="animatish text-2xl font-bold mb-2 text-white">
            Hello there, my name is 
          </h1>
          <h1 className="text-7xl font-bold text-white">Hayes Bentley</h1>
          </div>
        )}
        {showParagraph && (
          <p className="homeContent mt-4">
            {" "}
            I'm a passionate software developer and problem solver, with a
            proven track record of solving emerging problems in Manufacturing
            Automation. Currently, I am a Automation Engineering Intern @
            <a className="text-blue-200 hover:italic" href="https://www.spacex.com/vehicles/starship/" target="_blank">
              SpaceX
            </a>
            , helping to build the Starships that will take us to Mars!
            I am studying Electrical + Computer Engineering @{" "}
            <a
              href="https://ece.osu.edu/ohio-state-electrical-engineering-program/what-ece"
              target="_blank"
            >
              The Ohio State University.{" "}
            </a>
            Go Bucks!
          </p>
        )}
      </div>
      <div className="p-4 image-section">
        <svg src={headshot} alt="Image" className="w-64 h-64 rounded-full"/>
      </div> 
    </div>
  );
};

export default HomePage;
