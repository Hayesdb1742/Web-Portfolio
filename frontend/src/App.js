import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  console.log('App')
  return (
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
  );
}

export default App;
