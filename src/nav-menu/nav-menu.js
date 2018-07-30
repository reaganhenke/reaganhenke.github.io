import React, { Component } from 'react';
import brand from '../static-resources/rhbrand.png';

export default class NavMenu extends Component {
  render() {
    return (
      <div className="uk-container uk-container-center uk-responsive-width uk-padding-remove uk-margin-remove" >
      
          <nav id= "mynavbar" className="uk-navbar uk-responsive-width" data-uk-sticky="{animation: 'uk-animation-slide-top'}">
              <a href="" className="uk-navbar-brand">
                  <div className="uk-container uk-overlay" style={{width:'300px', height:'100px'}}>
                  <img src={brand} width="100px" height="100px"></img>
                  </div>
              </a>
              <div className="uk-navbar-flip">
              <ul id="navoptions" className="uk-navbar-nav" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: true}" >
                  <li><a href="#headerblock"></a></li>
                  <li><a href="#projects">independent projects</a></li>
                  <li><a href="#experience">experience</a></li>
                  <li><a href="#classwork">classwork</a></li>
                  <li><a href="#management">management</a></li>
                  <li><a href="#design">design/branding</a></li>
              </ul>
              </div>
          </nav>
      </div>
    )
  }
}
