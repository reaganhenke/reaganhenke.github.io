import React, { Component } from 'react';
import './experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div id="experience" className="content-section">
        <h1>Experience</h1>
        <div className="jobs-row">
          <div>
              <h2>Software Engineer</h2>
              <h3>Capital One (2017 - present)</h3>
              <p>Currently, I work for Capital One as a software engineer in their Technology Development Program, a two year rotational program. I’m on a front end team working in Angular 6.</p>
          </div>
          <div>
              <h2>Software Engineer Intern</h2>
              <h3>Best Nomos Medical (Summer 2016)</h3>
              <p> Over the summer I worked with Best Nomos Medical International in Pittsburgh, PA as a software engineer intern. I debugged software for radiation oncology and wrote tests for the new release. I also worked on the test database and bug reporting system.</p>
          </div>
        </div>
        <div className="jobs-row">
            <div>
                <h2>Teaching Assistant</h2>
                <h3>CMU Psychology Department (2016)</h3>
                <p>I worked as a teaching assistant for a research methods course at Carnegie Mellon. I helped teams create their research projects and software for running their experiments in Python and EPrime. I also compiled and analyzed class data. </p>
            </div>
            <div >
                <h2>Research Assistant</h2>
                <h3>Dr. Janell Carroll / Cengage (Summer 2015)</h3>
                <p>I interned for Dr. Janell Carroll and assisted with the latest release of her <i>Sexuality Now</i> textbook through Cengage. 
                I edited chapters and created graphics for the text. I also implemented several online 
                resources for Dr. Carroll, including her <a href="https://www.drjanellcarroll.com/">personal site</a>.</p>
            </div>
        </div>
      </div> 
    )
  }
}
