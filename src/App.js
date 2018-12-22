import React, { Component } from 'react';
import './App.css';
import NavMenu from './nav-menu/nav-menu';
import About from './about/about';
import Header from './header/header';
import Projects from './projects/projects';
import Experience from './experience/experience';
import Classwork from './classwork/classwork';
import Management from './management/management';
import Design from './design/design';
import { BrowserRouter, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
