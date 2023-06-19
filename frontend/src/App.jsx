import React, { useContext, useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Slider from './components/Slider'
import Contact from './pages/Contact'
import "./index.css";
import "./App.css"
import WorkExperience from "./pages/WorkExperience"
import {ThemeContext, ThemeProvider} from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import 'animate.css'
const App = () => {
  const [inProp, setInProp] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isInitialLoad) {
      // Delay the fade-in effect after 1 second
      setTimeout(() => {
        setIsNavbarVisible(false)
      }, 1000);


      setTimeout(() => {
        setInProp(true);  
      }, 1000);
    }
  }, [isInitialLoad]);

  return (
    <div className='container'>
      <Navbar/>
        <div style={{height: "100vh", overflow: "hidden" , paddingTop:'500px'}}>
          <Home/>
        </div>
      <About />
      <WorkExperience/>
      <Projects />
      <Contact />
    </div>
  );
};

export default App;


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <div style={{height: "100vh", overflow: "hidden" , paddingTop:'70px'}}>
//         <Home/>
//       </div>
//       <About />
//       <Projects />
//       <WorkExperience/>
//       <Contact />
//     </div>
//   );
// }

// export default App;