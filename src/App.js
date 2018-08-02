import React, { Component } from 'react';
import './App.css';
import './custom-uikit.css';
import NavMenu from './nav-menu/nav-menu';
import Header from './header/header';
import Projects from './projects/projects';
import Experience from './experience/experience';
import Classwork from './classwork/classwork';
import Management from './management/management';
import Design from './design/design';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavMenu />
          <Route exact path='/' component={Header}/>
          <Route path='/projects' component={Projects}/>       
          <Route path='/experience' component={Experience}/>       
          <Route path='/classwork' component={Classwork}/>       
          <Route path='/management' component={Management}/>       
          <Route path='/design' component={Design}/>       
        <div className="uk-text-center"> Like this website? I made it. Thanks for visiting. </div> 
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
