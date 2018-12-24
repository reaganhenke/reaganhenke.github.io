import React, { Component } from 'react';
import './App.css';
import About from './about/about';
import Projects from './projects/projects';
import Experience from './experience/experience';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faTimes)

class App extends Component {
  render() {
    return (
      <div class="content">
        {/* <NavMenu /> */}
        <About />
        <Projects />
        <Experience />
        <footer> Thanks for visiting. </footer> 
      </div>
    );
  }
}

export default App;
