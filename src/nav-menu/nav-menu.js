import React, { Component } from 'react';
import brand from '../static-resources/rhbrand.png';
import { Link } from 'react-router-dom'

export default class NavMenu extends Component {
  render() {
    return (
      <div className="uk-container uk-container-center uk-responsive-width uk-padding-remove uk-margin-remove" >
      
          <nav id= "mynavbar" className="uk-navbar uk-responsive-width" data-uk-sticky="{animation: 'uk-animation-slide-top'}">
              <Link to="/" className="uk-navbar-brand">
                  <div className="uk-container uk-overlay" style={{width:'300px', height:'100px'}}>
                  <img src={brand} width="100px" height="100px"></img>
                  </div>
              </Link>
              <div className="uk-navbar-flip">
              <ul id="navoptions" className="uk-navbar-nav" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: true}" >
                  <li><Link to="/projects">independent projects</Link></li>
                  <li><Link to="/experience">experience</Link></li>
                  <li><Link to="/classwork">classwork</Link></li>
                  <li><Link to="/management">management</Link></li>
                  <li><Link to="/design">design/branding</Link></li>
              </ul>
              </div>
          </nav>
      </div>
    )
  }
}
