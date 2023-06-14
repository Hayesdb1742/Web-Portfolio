import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, ThemeProvider, useTheme } from "styled-components";
import darkTheme from "../themes/dark-theme.js";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./Home.css";
import "animate.css";

const HomePage = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 3000);
  }, []);
  return (
    <div className="homepage">
      {showHeader && (
        <h1 className="animatish">Hello there, my name is Hayes Bentley</h1>
      )}
      <p>
        {" "}
        I'm a passionate software developer and problem solver, with a proven
        track record of solving emerging problems in Manufacturing Automation.
        Currently, I am a Automation Engineering Intern @{" "}
        <a href="https://www.spacex.com/" target="_blank">
          SpaceX
        </a>
        , and studying Electrical + Computer Engineering @{" "}
        <a
          href="https://ece.osu.edu/ohio-state-electrical-engineering-program/what-ece"
          target="_blank"
        >
          The Ohio State University.{" "}
        </a>
        Go Bucks!
      </p>
    </div>
  );
};

export default HomePage;

// function HomePage() {
//   const theme = useTheme();
//   console.log("Theme: ");
//   console.log(theme)
//   return (
//     <div className="homepage">
//       <h1>Hello there, my name is Hayes Bentley</h1>
//       <p> I'm a passionate software developer and problem solver, with a proven track record of solving emerging problems in Manufacturing Automation.
//         Currently, I am a Automation Engineering Intern @ <a href='https://www.spacex.com/' target="_blank">SpaceX</a>, and studying Electrical + Computer Engineering @ <a href='https://ece.osu.edu/ohio-state-electrical-engineering-program/what-ece' target="_blank">The Ohio State University. </a>
//         Go Bucks!</p>
//     </div>
//   );
// }
