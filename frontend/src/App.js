<<<<<<< HEAD
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
=======
import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 18a3368d63ad496b20d9a17697aeb3eb13f0076d
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
<<<<<<< HEAD
    <div>
      <Navbar />
      <h1>Welcome to my site!</h1>
      <p>This is some example text.</p>
    </div>
=======
    <Router>
      <div>
        <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Suspense>
      </div>
    </Router>
>>>>>>> 18a3368d63ad496b20d9a17697aeb3eb13f0076d
  );
}

export default App;