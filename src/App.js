import React, { Component } from 'react';
import './App.css';
import './custom-uikit.css';
import NavMenu from './nav-menu/nav-menu';
import Header from './header/header';
import Content from './content/content';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <Header />
        <Content />
        <div className="uk-text-center"> Like this website? I made it. Thanks for visiting. </div> 
      </div>
    );
  }
}

export default App;
