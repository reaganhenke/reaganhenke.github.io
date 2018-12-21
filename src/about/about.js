import React, { Component } from 'react';
import codepen from '../static-resources/codepen.png';
import github from '../static-resources/github.png';
import './about.css';

export default class About extends Component {
  render() {
    return (
        <div>
          <h1>Hello! I’m Reagan.</h1>
          <p> I’m a frontend developer based in Arlington, Virginia, 
            and I currently work for Capital One. I graduated from 
            Carnegie Mellon University in 2017 with a major in Psychology 
            and a minor in Computer Science. I combine my interests 
            to build beautiful, accessible front end designs with intuitive 
            user interfaces.</p>
          <p>In my free time, I love music and theater. I perform regularly 
            with a shadowcast in DC, and love going to shows and museums in 
            the city.</p>
            <a href="https://codepen.io/reaganhenke/"><img className="code-link" src={codepen}></img></a>
            <a href="https://github.com/reaganhenke"><img className="code-link" src={github}></img></a>

          <div class="reagan-gif"></div>
        </div>
    )
  }
}
