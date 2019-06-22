import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import References from './components/References';
import Skills from './components/Skills';
import NoMatch from './components/NoMatch';

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
