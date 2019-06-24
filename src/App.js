import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import References from './pages/References';
import Skills from './pages/Skills';
import NoMatch from './pages/NoMatch';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/references' component={References} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
