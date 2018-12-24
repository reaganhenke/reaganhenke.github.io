import React, { Component } from 'react';
import spambot from '../static-resources/spambot_demo.png';
import bitclips from '../static-resources/8bitclips.mp4';
import ministryoftruth from '../static-resources/ministryoftruth.png';
import musicclips from '../static-resources/musicclips.mp4';
import knitclips from '../static-resources/knitclips.mp4';
import './projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="content-section">
        <h1>Projects</h1>

        <div className="project">
          <div>
            <h2>Ministry of Truth (2017)</h2>
            <p>I developed Ministry of Truth as part of Capital One’s Developer Academy (CODA) program. 
              Inspired by 1984, Ministry of Truth pushes you to censor as many news articles as possible, 
              while trying to make enough money to keep your family warm and fed. </p>
              <p>Deployed at <a href="http://ministryoftruth.surge.sh/">ministryoftruth.surge.sh</a>.</p>
          </div>
          <div>
            <img width="100%" src={ministryoftruth} alt="Ministry of Truth Game"></img>
          </div>
        </div>

        <div className="project">
          <div>
            <h2>SpamBot (2016)</h2>
            <p>SpamBot is a Google Sheets add-on I wrote to get responses to Google Forms more efficiently. It parses the responses so far and sends timed email reminders to people it's still waiting on. SpamBot has a full user interface, allowing for customizable email content, timing, and respondant lists. </p>
            <p> You can download SpamBot <a href="https://chrome.google.com/webstore/detail/spambot/jmfpkbpeiljmacbfmkeldklpcgbfngdj?hl=en"> on the Google Store</a></p>
          </div>
          <div>
            <img width="100%" src={spambot} alt="Spambot screenshot"></img>
          </div>
        </div>

        <div className="project">
          <div>
              <h2>8Bit Campus (2016)</h2>
              <p> 8Bit Campus is a game I wrote using Python and Pygame, inspired by my time at college and a cappella competitions. I created all code, pixel art, sprites, and background music. It functions as an RPG like Pokemon, but on a college campus. Instead of battling, players can have "sing-off" style fights with other characters by hitting the right notes. You can find the demo code on my <a href="https://github.com/reaganhenke/8Bit-Campus">GitHub</a>, and watch the demo in action on my <a href="https://www.youtube.com/watch?v=OoftmZGZqFw">Youtube</a>.</p>
          </div>
          <div>
              <video className="uk-cover-background" autoPlay loop muted >
                <source src={bitclips} type="video/mp4"/>
              </video>
          </div>
        </div>

        <div className="project">
          <div>
              <h2>Markov String Quartet Generator (2016)</h2>
              <p>At Carnegie Mellon, I studied composition and computational techniques, 
                as well as information systems and processing in real time environments. 
                My final project was a Markov String Quartet Generator that was controlled 
                by a TouchOSC app.</p>
                <p>You can watch a demo on my <a href="https://youtu.be/Dr5jtUAfFxc">YouTube</a>.</p>
          </div>
          <div>
              <video className="uk-cover-background" width="100%" autoPlay loop muted >
                <source src={musicclips} type="video/mp4"/>
              </video>
          </div>
        </div>

        <div className="project">
          <div>
              <h2>KnitWit (2014)</h2>
              <p>I studied Python at Carnegie Mellon as part of my Fundamentals of Programming class.
              My final project was a 2D array based program that could be used to design sweater knitting patterns.</p>
                <p>You can watch a demo on my <a href="https://www.youtube.com/watch?v=jTIaIkjy08Y">YouTube</a>.</p>
          </div>
          <div>
              <video className="uk-cover-background" width="100%" autoPlay loop muted >
                <source src={knitclips} type="video/mp4"/>
              </video>
          </div>
        </div>

      </div> 
    )
  }
}
