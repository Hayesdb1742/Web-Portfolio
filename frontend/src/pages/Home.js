import React from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext, ThemeProvider, useTheme} from 'styled-components'
import darkTheme from '../themes/dark-theme.js'


function HomePage() {
  const theme = useTheme();
  console.log("Theme: ");
  console.log(theme)
  return (
    <div className="homepage">
      <h1>Hello there, my name is Hayes Bentley</h1>
      <p> I'm a passionate software developer and problem solver, dedicated to crafting elegant solutions for real-world challenges.  
        Currently, I am a Software Engineering Intern @ <a href='https://www.spacex.com/' target="_blank">SpaceX</a>, and studying Electrical + Computer Engineering @ <a href='https://ece.osu.edu/ohio-state-electrical-engineering-program/what-ece' target="_blank">The Ohio State University. </a>
        Go Bucks!</p>
    </div>
  );
}

export default HomePage;
