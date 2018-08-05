import React, { Component } from 'react';
import spambot from '../static-resources/spambot_demo.png';
import prefsort from '../static-resources/prefsort_demo.png';
import bitclips from '../static-resources/8bitclips.mp4';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="container">
        <div className="title-section">
          <div className="doodle" data-uk-parallax="{bulbOffset:'500,0', viewport:0.5}">
            <svg xmlns="http://www.w3.org/2000/svg" width="160.372" height="246.788" viewBox="0 0 160.372 246.788">
              <path id= "bulb" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="258.5579" strokeDashoffset="0" d="M79.3 180.266h47.87s8.76.63 8.76 12.342c0 11.713-7.968 12.34-7.968 12.34H30.64s-7.972-.627-7.972-12.34c0-11.71 8.763-12.342 8.763-12.342H79.3z"/>
              <path id="bulb1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="204.0057" strokeDashoffset="0" d="M79.926 204.95h36.122s8.442.527 8.442 10.354c0 9.826-7.68 10.35-7.68 10.35l-36.885.004-36.882-.003s-7.682-.524-7.682-10.35c0-9.828 8.445-10.356 8.445-10.356h36.12z"/>
              <path id="bulb2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="471.83774" strokeDashoffset="0" d="M119.354 180.334s-1.22 3.744 3.8-23.02c8.772-38.28 35.822-38.68 35.413-79.675-.412-40.994-24.59-75.84-78.382-75.84-53.79 0-77.97 34.845-78.38 75.84-.41 40.994 26.122 41.895 35.41 79.674 5.02 26.763 3.802 23.02 3.802 23.02"/>
              <path id="bulb3" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="98.43544" strokeDashoffset="0" d="M78.722 226.465h10.943s8.76.47 8.76 9.26c0 8.792-7.97 9.26-7.97 9.26l-11.733.003-10.578-.002s-7.972-.47-7.972-9.26 8.763-9.26 8.763-9.26h9.787z"/>
              <path id="bulb4" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="396.05" strokeDashoffset="0" d="M95.45 180.266c-1.614-3.21-2.883-29.73-2.384-36.155 2.113-27.21 5.88-46.824 9.65-51.67s11.306-8.612 15.61-5.113c4.31 3.5 2.14 11.66-3.64 15.387-5.78 3.725-18.29 2.43-24.656-.76-6.367-3.187-14.246-8.937-17.193-17.588-2.865-8.41-1.525-16.69 7.088-16.958 8.614.27 9.954 8.55 7.09 16.958-2.948 8.65-10.828 14.4-17.193 17.59-6.367 3.187-18.877 4.483-24.658.758-5.78-3.726-7.948-11.887-3.64-15.387 4.306-3.5 11.843.27 15.61 5.114s7.538 24.46 9.65 51.67c.5 6.422-.767 32.944-2.382 36.156"/>
            </svg>
          </div>
          <div className="section">
              <h1>independent projects</h1>
              <p>I come up with ways to make things work better (and I have a lot of fun on the side). </p><p> Looking for my school related work? Check out my <a href="#classwork" data-uk-smooth-scroll>classwork</a> section. These are projects I've taken on independently. </p> 
          </div>
        </div>

        <div className="row">
          {/* <!-- spambot --> */}
          <div className="half-col">
            <h2>SpamBot</h2>
            <p>SpamBot is a Google Sheets add-on I wrote to get responses to Google Forms more efficiently. It parses the responses so far and sends timed email reminders to people it's still waiting on. SpamBot has a full user interface, allowing for customizable email content, timing, and respondant lists. </p>
            <p> You can download SpamBot <a href="https://chrome.google.com/webstore/detail/spambot/jmfpkbpeiljmacbfmkeldklpcgbfngdj?hl=en"> on the Google Store</a></p>
          </div>
          <div className="half-col">
            {/* <!-- spambot demo pics -->  */}
            <img width="100%" src={spambot} style={{marginTop:'20px'}}></img>
          </div>
        </div>
  
        <div className="row">
          {/* <!-- PreferenceSort -->  */}
          <div className="half-col">
            <h2>PreferenceSorter</h2>
            <p>PreferenceSorter is another Google Sheets add-on I wrote. For our a cappella group, we needed a way for each member to give input on songs ideas so we could rank them by preference. PreferenceSorter tracks User Properties and allows users to "upvote" or "downvote" each option using arrows in a sidebar menu. </p>
            <p> You can download PreferenceSorter <a href="https://chrome.google.com/webstore/detail/preferencesorter/fokdepglddfkemdohpoiifkdddeodpab?utm_source=permalink"> on the Google Store</a></p>
          </div>
          <div className="half-col">
            {/* <!-- pref sort demo pics -->  */}
            <img width="100%" src={prefsort} style={{marginTop:'20px'}}></img>
          </div>
        </div>

        <div className="row">
          {/* <!--8bit campus --> */}
          <div className="half-col">
              <h2>8Bit Campus</h2>
              <p> 8Bit Campus is a game I wrote using Python and Pygame, inspired by my time at college and a cappella competitions. I created all code, pixel art, sprites, and background music. It functions as an RPG like Pokemon, but on a college campus. Instead of battling, players can have "sing-off" style fights with other characters by hitting the right notes. You can find the demo code on my <a href="https://github.com/reaganhenke/8Bit-Campus">GitHub</a>, and watch the demo in action on my <a href="https://www.youtube.com/watch?v=OoftmZGZqFw">Youtube</a>.</p>
          </div>
          <div className="half-col">
            {/* <!-- 8bit demo vid -->  */}
            <div className="uk-cover" style={{ width: '100%', marginTop:'20px'}}>
              <video className="uk-cover-background" autoPlay loop muted >
                <source src={bitclips} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>

          {/* <!-- TrebleYourself (publish this) and ReminderBot (maybe publish this?) --> */}
      </div> 
    )
  }
}
