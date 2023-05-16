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
      <h1>Welcome to My Portfolio</h1>
      <p>As a senior computer engineering student, I have gained experience in web development and engineering. Here are some of my skills:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
      </ul>
      <p>Feel free to browse my <Link to="/projects">projects</Link> and <Link to="/resume">resume</Link>.</p>
    </div>
  );
}

export default HomePage;
