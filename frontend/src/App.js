import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Goals from './Goals';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/work-experience" component={WorkExperience} />
        <Route path="/goals" component={Goals} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
