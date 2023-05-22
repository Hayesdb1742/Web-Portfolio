import React, { useContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Slider from './components/Slider'
import Contact from './pages/Contact'
import "./index.css";
import "./App.css"
import WorkExperience from "./pages/WorkExperience"
import darkTheme from './themes/dark-theme.js'
import {ThemeContext, ThemeProvider} from 'styled-components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/about",
    element: <About />,
  },
  {
    path:"/contact",
    element: <Contact />,
  },
  {
    path:"/projects",
    element: <Projects />
  },
  {
    path:"/work-experience",
    element: <WorkExperience />
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


function App() {
  return (
    <div>
      <Navbar />
      <div style={{height: "100vh", overflow: "hidden" , paddingTop:'70px'}}>
        <Home/>
      </div>
      <About />
      <Projects />
      <WorkExperience/>
      <Contact />
    </div>
  );
}

export default App;