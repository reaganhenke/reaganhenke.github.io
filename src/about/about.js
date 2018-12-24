import React, { Component } from 'react';
import codepen from '../static-resources/codepen.png';
import github from '../static-resources/github.png';
import './about.css';
import Magnet from '../magnet/magnet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

export default class About extends Component {

  render() {
    return (
        <div className="about-div">
          <div className="word-board">
            <Magnet content="developer" width="90" top='12%' left='-1%'></Magnet>
            <Magnet content="coder" width="80" top='10%' left='23%'></Magnet>
            <Magnet content="programmer" width="110" top='13%' left='61%'></Magnet>
            <Magnet content="musician" width="80" top='12%' left='85%'></Magnet>
            <Magnet content="code" width="80" top='38%' left='11%'></Magnet>
            <Magnet content="sing" width="80" top='39%' left='31%'></Magnet>
            <Magnet content="create" width="80" top='25%' left='43%'></Magnet>
            <Magnet content="build" width="80" top='43%' left='56%'></Magnet>
            <Magnet content="design" width="80" top='39%' left='76%'></Magnet>
            <Magnet content="html" width="80" top='67%' left='-1%'></Magnet>
            <Magnet content="javascript" width="80" top='73%' left='20%'></Magnet>
            <Magnet content="angular" width="80" top='65%' left='39%'></Magnet>
            <Magnet content="react" width="80" top='71%' left='58%'></Magnet>
            <Magnet content="node" width="80" top='72%' left='75%'></Magnet>
            <Magnet content="scss" width="80" top='60%' left='89%'></Magnet>
            <div className="help-text"><FontAwesomeIcon icon={faHandPointUp}/>play with me</div>
          </div>
          <h1>Hello! I’m Reagan.</h1>
          <div className="about-content">
            <p> I’m a frontend developer based in Arlington, Virginia, 
              and I currently work for Capital One. I graduated from 
              Carnegie Mellon University in 2017 with a major in Psychology 
              and a minor in Computer Science. I combine my interests 
              to build beautiful, accessible front end designs with intuitive 
              user interfaces.</p>
            <p>In my free time, I love music and theater. I perform regularly 
              with a shadowcast in DC, and love going to shows and museums in 
              the city.</p>
          </div>
          <div className="row">
            <div className="links">
              <a href="https://codepen.io/reaganhenke/"><img className="code-link" src={codepen} alt="codepen"></img>
                <div className="label">codepen</div></a>
              <a href="https://github.com/reaganhenke"><img className="code-link" src={github} alt="github"></img>
                <div className="label">github</div></a>
            </div>
            <div className="reagan-gif"></div>
          </div>
        </div>
    )
  }
}
