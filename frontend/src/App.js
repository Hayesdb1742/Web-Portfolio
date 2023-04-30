import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/contacts';
import Root from "./routes/root";
import "./index.css";
import WorkExperience from "./pages/WorkExperience"


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
  console.log('App')
  return (
    <div>
      <Navbar />
      <h1>Welcome to my site!</h1>
      <p>This is some example text.</p>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;