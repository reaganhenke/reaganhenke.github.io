import React, { Component } from 'react';
import resume from '../static-resources/resume.pdf';
import resumeScroll from '../static-resources/resume_scroll.jpg';

export default class Experience extends Component {
  render() {
    return (
      <div id="experience" className="container">
        <div className="title-section">
          <div className="doodle" data-uk-parallax="{bulbOffset:'500,0', viewport:0.5}">
            <svg xmlns="http://www.w3.org/2000/svg" width="160.56" height="246.96" viewBox="0 0 160.56 246.96">
              <circle id="connect" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="97.825" cy="126.744" r="21.81"/>
              <circle id="connect1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="136.444" cy="22.81" r="21.81"/>
              <circle id="connect2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="23.81" cy="106.448" r="21.81"/>
              <circle id="connect3" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="136.75" cy="223.15" r="21.81"/>
              <path id="connect4" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="161.417" strokeDashoffset="0" d="M43.458 115.925l32.74 8.024M129.312 43.42l-23.5 63.03M107.607 146.236l21.705 56.408"/>
            </svg>
          </div>
          <div className="section">
            <h1>experience</h1>
            <p>You can find my single-page resume <a href={resume} download>here</a>.</p>
          </div>
        </div>

        <div className="uk-container uk-container-center uk-width-medium-1-1 uk-margin-remove uk-padding-remove">
            <div className="uk-cover-background" style={{height: '200px', backgroundImage: `url(${resumeScroll})`}} data-uk-parallax="{bg: -500}"></div>
        </div>

        <div className="row">
          <div className="third-col">
              <h2>Software Engineer Intern</h2>
              <h3>Best Nomos Medical (Summer 2016)</h3>
              <p> Over the summer I worked with Best Nomos Medical International in Pittsburgh, PA as a software engineer intern. I debugged software for radiation oncology and wrote tests for the new release. I also worked on the test database and bug reporting system.</p>
            </div>
            <div className="third-col" >
                <h2>Teaching Assistant</h2>
                <h3>CMU Psychology Department (2016)</h3>
                <p>I worked as a teaching assistant for a research methods course at Carnegie Mellon. I helped teams create their research projects and software for running their experiments in Python and EPrime. I also compiled and analyzed class data. </p>
            </div>
            <div className="third-col">
                <h2>Research Assistant</h2>
                <h3>Dr. Janell Carroll / Cengage (Summer 2015)</h3>
                <p> Last summer I interned for Dr. Janell Carroll and assisted with the latest release of her <i>Sexuality Now</i> textbook through Cengage. I edited chapters and created graphics for the text. I also implemented several online resources for Dr. Carroll.</p>
                {/* <!-- The website I made can be found here --> */}
            </div>
        </div>
      </div> 
    )
  }
}
