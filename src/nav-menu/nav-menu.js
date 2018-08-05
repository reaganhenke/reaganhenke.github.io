import React, { Component } from 'react';
import brand from '../static-resources/rhbrand.png';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav-menu.css';

export default class NavMenu extends Component {

  constructor() {
    super();

    this.state = {
        menuOpen: false,
        mobile: (window.innerWidth < 600)
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getMenu = this.getMenu.bind(this);
  }

  toggleMenu() {
      this.setState({menuOpen: !this.state.menuOpen});
  }

  updateDimensions() {
      var mobile = (window.innerWidth < 600);
      this.setState({
          mobile: mobile,
          menuOpen: !mobile
    });
}

componentWillMount() {
    this.updateDimensions();
}
componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
}

getMenu(){
    if (this.state.mobile) {
        return (<FontAwesomeIcon id="hamburger" icon={this.state.menuOpen ? 'times' : 'bars'} style={{ visibility: this.state.mobile ? 'visible': 'hidden'}} onClick={this.toggleMenu}/>);
    } else {
        return (<ul id="links">
        <li><NavLink activeClassName='active' to="/projects">projects</NavLink></li>
        <li><NavLink activeClassName='active' to="/experience">experience</NavLink></li>
        <li><NavLink activeClassName='active' to="/classwork">classwork</NavLink></li>
        <li><NavLink activeClassName='active' to="/management">management</NavLink></li>
        <li><NavLink activeClassName='active' to="/design">design</NavLink></li>
        </ul>)
    }
}

  render() {
    return (      
        <div id="navbar">
            <div id="bg-fill"></div>
            <Link to="/" className="logo-link">
                <img id="logo" src={brand} width="100px" height="100px"></img>
            </Link>
            <div className="nav-options">
                {this.getMenu()}
            </div>
                <ul id="mobile-links" className={(this.state.menuOpen || !this.state.mobile ? 'show': 'hide')} >
                    <li><NavLink activeClassName='active' to="/projects">projects</NavLink></li>
                    <li><NavLink activeClassName='active' to="/experience">experience</NavLink></li>
                    <li><NavLink activeClassName='active' to="/classwork">classwork</NavLink></li>
                    <li><NavLink activeClassName='active' to="/management">management</NavLink></li>
                    <li><NavLink activeClassName='active' to="/design">design</NavLink></li>
                </ul>
        </div>
    )
  }
}
