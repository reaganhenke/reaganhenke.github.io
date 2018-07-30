import React, { Component } from 'react';
import spambot from '../static-resources/spambot_demo.png';
import prefsort from '../static-resources/prefsort_demo.png';
import bitclips from '../static-resources/8bitclips.mp4';
import musicclips from '../static-resources/musicclips.mp4';
import knitclips from '../static-resources/knitclips.mp4';
import logos from '../static-resources/logo_grid.png';
import amac from '../static-resources/AMAC_cover.jpg';
import resume from '../static-resources/resume.pdf';
import resumeScroll from '../static-resources/resume_scroll.jpg';
import trebleCrop from '../static-resources/treblecrop.jpg';
import shirt from '../static-resources/shirt.jpg';
import tablecloth from '../static-resources/tablecloth.jpg';
import alumni from '../static-resources/treblealumni.jpg';
import profilePicture from '../static-resources/profilepicture.png';
import amac1 from '../static-resources/amac1.jpg';
import amac2 from '../static-resources/amac2.jpg';
import auditionSpray from '../static-resources/auditionspray.png';
import wordmark from '../static-resources/wordmark.png';
import recruitposter from '../static-resources/recruitposter.png';
import amacCover from '../static-resources/AMAC_cover.jpg';

export default class Content extends Component {
  render() {
    return (
      <div id="headerblock" className="uk-container uk-position-relative uk-container-center uk-margin-remove uk-padding-remove uk-responsive-width" >
      <div id="projects" className="uk-container uk-container-center uk-margin uk-responsive-width" style={{background:'#eee', marginLeft: '80px', marginRight:'80px', padding:'20px'}}>
        <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}}>
          <div className="uk-width-1-10 uk-padding-remove uk-margin-remove" data-uk-parallax="{bulbOffset:'500,0', viewport:0.5}">
            <svg xmlns="http://www.w3.org/2000/svg" width="160.372" height="246.788" viewBox="0 0 160.372 246.788">
              <path id= "bulb" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="258.5579" strokeDashoffset="0" d="M79.3 180.266h47.87s8.76.63 8.76 12.342c0 11.713-7.968 12.34-7.968 12.34H30.64s-7.972-.627-7.972-12.34c0-11.71 8.763-12.342 8.763-12.342H79.3z"/>
              <path id="bulb1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="204.0057" strokeDashoffset="0" d="M79.926 204.95h36.122s8.442.527 8.442 10.354c0 9.826-7.68 10.35-7.68 10.35l-36.885.004-36.882-.003s-7.682-.524-7.682-10.35c0-9.828 8.445-10.356 8.445-10.356h36.12z"/>
              <path id="bulb2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="471.83774" strokeDashoffset="0" d="M119.354 180.334s-1.22 3.744 3.8-23.02c8.772-38.28 35.822-38.68 35.413-79.675-.412-40.994-24.59-75.84-78.382-75.84-53.79 0-77.97 34.845-78.38 75.84-.41 40.994 26.122 41.895 35.41 79.674 5.02 26.763 3.802 23.02 3.802 23.02"/>
              <path id="bulb3" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="98.43544" strokeDashoffset="0" d="M78.722 226.465h10.943s8.76.47 8.76 9.26c0 8.792-7.97 9.26-7.97 9.26l-11.733.003-10.578-.002s-7.972-.47-7.972-9.26 8.763-9.26 8.763-9.26h9.787z"/>
              <path id="bulb4" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="396.05" strokeDashoffset="0" d="M95.45 180.266c-1.614-3.21-2.883-29.73-2.384-36.155 2.113-27.21 5.88-46.824 9.65-51.67s11.306-8.612 15.61-5.113c4.31 3.5 2.14 11.66-3.64 15.387-5.78 3.725-18.29 2.43-24.656-.76-6.367-3.187-14.246-8.937-17.193-17.588-2.865-8.41-1.525-16.69 7.088-16.958 8.614.27 9.954 8.55 7.09 16.958-2.948 8.65-10.828 14.4-17.193 17.59-6.367 3.187-18.877 4.483-24.658.758-5.78-3.726-7.948-11.887-3.64-15.387 4.306-3.5 11.843.27 15.61 5.114s7.538 24.46 9.65 51.67c.5 6.422-.767 32.944-2.382 36.156"/>
            </svg>
          </div>
          <div className="uk-width-9-10" style={{padding:'20px', height:'150px'}}>
              <h1>independent projects</h1>
              <p>I come up with ways to make things work better (and I have a lot of fun on the side). </p><p> Looking for my school related work? Check out my <a href="#classwork" data-uk-smooth-scroll>classwork</a> section. These are projects I've taken on independently. </p> 
          </div>
  
          {/* <!-- spambot --> */}
          <div className="uk-width-medium-1-2 uk-margin">
            <h2>SpamBot</h2>
            <p>SpamBot is a Google Sheets add-on I wrote to get responses to Google Forms more efficiently. It parses the responses so far and sends timed email reminders to people it's still waiting on. SpamBot has a full user interface, allowing for customizable email content, timing, and respondant lists. </p>
            <p> You can download SpamBot <a href="https://chrome.google.com/webstore/detail/spambot/jmfpkbpeiljmacbfmkeldklpcgbfngdj?hl=en"> on the Google Store</a></p>
          </div>
          <div className="uk-width-medium-1-2">
            {/* <!-- spambot demo pics -->  */}
            <img width="350" src={spambot} style={{marginTop:'20px'}}></img>
          </div>
  
          {/* <!-- PreferenceSort -->  */}
          <div className="uk-width-medium-1-2 uk-margin" >
            <h2>PreferenceSorter</h2>
            <p>PreferenceSorter is another Google Sheets add-on I wrote. For our a cappella group, we needed a way for each member to give input on songs ideas so we could rank them by preference. PreferenceSorter tracks User Properties and allows users to "upvote" or "downvote" each option using arrows in a sidebar menu. </p>
            <p> You can download PreferenceSorter <a href="https://chrome.google.com/webstore/detail/preferencesorter/fokdepglddfkemdohpoiifkdddeodpab?utm_source=permalink"> on the Google Store</a></p>
          </div>
          <div className="uk-width-medium-1-2">
            {/* <!-- pref sort demo pics -->  */}
            <img width="350" src={prefsort} style={{marginTop:'20px'}}></img>
          </div>
  
          {/* <!--8bit campus --> */}
          <div className="uk-width-medium-1-2 uk-margin">
              <h2>8Bit Campus</h2>
              <p> 8Bit Campus is a game I wrote using Python and Pygame, inspired by my time at college and a cappella competitions. I created all code, pixel art, sprites, and background music. It functions as an RPG like Pokemon, but on a college campus. Instead of battling, players can have "sing-off" style fights with other characters by hitting the right notes. You can find the demo code on my <a href="https://github.com/reaganhenke/8Bit-Campus">GitHub</a>, and watch the demo in action on my <a href="https://www.youtube.com/watch?v=OoftmZGZqFw">Youtube</a>.</p>
          </div>
          <div className="uk-width-medium-1-2 uk-margin">
            {/* <!-- 8bit demo vid -->  */}
            <div className="uk-cover" style={{height: '200px', width: '350px', marginTop:'20px'}}>
              <video className="uk-cover-background" autoPlay loop muted >
                <source src={bitclips} type="video/mp4"/>
              </video>
            </div>
          </div>
  
          {/* <!-- TrebleYourself (publish this) and ReminderBot (maybe publish this?) --> */}
          </div>
      </div> 
  
      <div style={{height:'50px'}}></div>
  
      {/* <!-- EXPERIENCE --> */}
      <div id="experience" className="uk-container uk-container-center uk-margin uk-responsive-width" style={{background:'#eee', marginLeft: '80px', marginRight:'80px', padding:'20px'}}>

        <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}}>
          {/* <!-- header --> */}
          <div className="uk-width-1-10 uk-padding-remove uk-margin-remove" data-uk-parallax="{connectOffset:'500,0', viewport:0.5}"> 

            <svg xmlns="http://www.w3.org/2000/svg" width="160.56" height="246.96" viewBox="0 0 160.56 246.96">
              <circle id="connect" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="97.825" cy="126.744" r="21.81"/>
              <circle id="connect1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="136.444" cy="22.81" r="21.81"/>
              <circle id="connect2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="23.81" cy="106.448" r="21.81"/>
              <circle id="connect3" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="137.036" strokeDashoffset="0" cx="136.75" cy="223.15" r="21.81"/>
              <path id="connect4" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="161.417" strokeDashoffset="0" d="M43.458 115.925l32.74 8.024M129.312 43.42l-23.5 63.03M107.607 146.236l21.705 56.408"/>
            </svg>
  
          </div>
          <div className="uk-width-9-10" style={{padding:'20px', height: '150px'}}>
            <h1>experience</h1>
            <p>You can find my single-page resume <a href={resume} download>here</a>.</p>
          </div>
        </div>

        {/* <!-- resume scroll --> */}
        <div className="uk-container uk-container-center uk-width-medium-1-1 uk-margin-remove uk-padding-remove">
            <div className="uk-cover-background" style={{height: '200px', backgroundImage: `url(${resumeScroll})`}} data-uk-parallax="{bg: -500}"></div>
        </div>

        <div className="uk-grid uk-container-center" style={{padding:'20px', paddingLeft:'20px', paddingRight:'40px'}}>
            <div className="uk-width-medium-1-3 uk-margin-remove uk-padding-small">
              <h2>Software Engineer Intern</h2>
              <h3>Best Nomos Medical (Summer 2016)</h3>
              <p> Over the summer I worked with Best Nomos Medical International in Pittsburgh, PA as a software engineer intern. I debugged software for radiation oncology and wrote tests for the new release. I also worked on the test database and bug reporting system.</p>
            </div>
            <div className="uk-width-medium-1-3 uk-margin-remove uk-padding-small" >
                <h2>Teaching Assistant</h2>
                <h3>CMU Psychology Department (2016)</h3>
                <p>I worked as a teaching assistant for a research methods course at Carnegie Mellon. I helped teams create their research projects and software for running their experiments in Python and EPrime. I also compiled and analyzed class data. </p>
            </div>
            <div className="uk-width-medium-1-3 uk-margin-remove uk-padding-small">
                <h2>Research Assistant</h2>
                <h3>Dr. Janell Carroll / Cengage (Summer 2015)</h3>
                <p> Last summer I interned for Dr. Janell Carroll and assisted with the latest release of her <i>Sexuality Now</i> textbook through Cengage. I edited chapters and created graphics for the text. I also implemented several online resources for Dr. Carroll.</p>
                {/* <!-- The website I made can be found here --> */}
            </div>
        </div>
      </div> 
  
      <div style={{height:'50px'}}></div>
  
      {/* <!-- CLASSWORK --> */}
      <div id="classwork" className="uk-container uk-container-center uk-margin uk-responsive-width" style={{background:'#eee', marginLeft: '80px', marginRight:'80px', padding:'20px'}}>
  
          <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}} >
              {/* <!-- header --> */}
              <div className="uk-width-1-10 uk-padding-remove uk-margin-remove" data-uk-parallax="{docOffset:'500,0', viewport:0.5}"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="160.56" height="246.96" viewBox="0 0 160.56 246.96">
                  <path id="doc0" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="758.68029" strokeDashoffset="0" d="M158.493 130.246v84.885c0 16.37-2.488 29.084-18.938 29.084H20.266S1.33 231.5 1.33 215.13v-84.885-99.28C1.33 14.592 3.818 1.88 20.268 1.88h119.289s18.938 12.712 18.938 29.084c-.002 16.373-.002 99.282-.002 99.282z"/>
                  <path id="doc1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10"  strokeDasharray="795.37689" strokeDashoffset="0" d="M19.658 204.547h112.155s9.88.173 9.88-10.06c0-10.23-9.88-9.71-9.88-9.71l-54.01-.004-49.073-.006s-9.88.52-9.88-9.71S28.73 165 28.73 165h103.1s9.88.172 9.88-10.06c0-10.23-9.88-9.71-9.88-9.71l-48.668-.004-54.432-.006s-9.88.52-9.88-9.71 9.88-10.057 9.88-10.057h103.1s9.88.173 9.88-10.058c0-10.23-9.88-9.71-9.88-9.71H18.85"/>
                  <path id="doc2" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="162.451568" strokeDashoffset="0" d="M135.417 68.423L119.49 65.22l-11.666 11.306-1.876-16.137-14.356-7.603 14.764-6.772 2.795-16.002 11.003 11.95 16.085-2.287-7.967 14.158z"/>
              </svg>
              </div>
              <div className="uk-width-9-10" style={{padding:'20px', height:'150px'}}>
                  <h1>classwork</h1>
                  <p>I'm a senior with a major in psychology and a minor in computer science. In my four years at Carnegie Mellon, I've worked on a lot of interesting projects. Here's some of my relevant classwork and favorite projects. </p>
              </div>
  
              {/* <!-- CS --> */}
              <div className="uk-width-1-1 uk-padding-remove uk-margin">
                  <h2> Computer Science</h2>
              </div>
              {/* <!-- leaving out 15-322 --> */}
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-323 Computer Music and Information Systems (Fall 2016)</h3>
                  <p> Studied composition and computational techniques, as well as information systems and processing in real time environments. My final project was a Markov String Quartet Generator that was controlled by a TouchOSC app. You can watch a demo on my <a href="https://youtu.be/Dr5jtUAfFxc">YouTube</a>.</p>
              </div>
              <div className="uk-width-medium-2-3 uk-margin" >
                  <div className="uk-cover" style={{height: '200px', width: '550px', margin:'15px'}}>
                          <video className="uk-cover-background" width="500" height="400" autoPlay loop muted >
                          <source src={musicclips} type="video/mp4"/>
                          </video>
                  </div>
              </div>
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-210 Parallel and Sequential Data Structures(Fall 2015)</h3>
                  <p>Studied a variety of data structures and algorithms with a focus on parallelism. Familiar with Standard ML(SML) language. </p> 
              </div>
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-213 Introduction to Computer Systems (Spring 2015)</h3>
                  <p> Studied computer systems, familiar with C and machine level code. Code from this course can't be distributed, but projects included writing a cache, a shell, and experience with malloc and proxies.</p>
              </div>
               <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-150 Functional Programming (Spring 2015)</h3>
                  <p>Experience with functional programming. </p>
              </div>
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-122 Principles of Imperative Programming (Fall 2014)</h3>
                  <p>Experience with imperative programming, experience with C.</p>
              </div>
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}} >
                  <h3>15-112 Fundamentals of Programming (Spring 2014)</h3>
                  <p>Familiar with Python. My final project was a 2D array based program that could be used to design sweater knitting patterns. Demo is available on <a href="https://www.youtube.com/watch?v=jTIaIkjy08Y">YouTube</a>.</p>
              </div>
              <div className="uk-width-medium-1-3 uk-margin" style={{padding:'10px'}}>
                  <div className="uk-cover" style={{height: '150px', width: '250px', margin:'15px'}}>
                          <video className="uk-cover" width="300" height="200" autoPlay loop muted >
                          <source src={knitclips} type="video/mp4"/>
                          </video>
                  </div>
              </div>
  
              {/* <!-- PYSCH --> */}
              <div className="uk-width-1-1 uk-padding-remove uk-margin">
                  <h2> Psychology </h2>
              </div>
  
              <div className="uk-width-medium-1-2 uk-margin" style={{padding:'10px'}} >
                  <h3>Research Methods in Cognitive Psychology (Spring 2016)</h3>
                  <p>Created a linguistic parsing task in python. The program measured reaction times, randomized conditions, computed hundreds of stimulation pairs, and saved a data file for each participant.</p>
                  {/* <!-- Post this code on github? --> */}
              </div>
              <div className="uk-width-medium-1-2 uk-margin" style={{padding:'10px'}} >
                  <h3>Music Cognition (Spring 2016)</h3>
                  <p>Created hundreds of wav files of music stimulation and created experiment program using EPrime software and inline coding conditions (based on C).</p>
              </div>
              {/* <!-- Psychology of Gender? --> */}
          </div>
      </div> 

      <div style={{height:'50px'}}></div>  
  
      {/* <!-- MANAGEMENT --> */}
      <div id="management" className="uk-container uk-container-center uk-margin uk-responsive-width" style={{background:'#eee', marginLeft: '70px', marginRight:'70px', padding:'20px'}}>
  
          <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}}>
                  {/* <!-- header --> */}
                  <div className="uk-width-1-10 uk-padding-remove uk-margin-remove" data-uk-parallax="{gearOffset:'500,0', viewport:0.5}">
  
                  <svg xmlns="http://www.w3.org/2000/svg" width="160.56" height="246.96" viewBox="0 0 160.56 246.96">
                      <path id="gear0" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="499.91077" strokeDashoffset="0" d="M126.744 125.604V113.17l-16.773-4.288c-1.162-5.034-3.12-9.763-5.765-14.028l8.89-14.844-8.754-8.832-14.924 8.762c-4.355-2.753-9.202-4.793-14.372-5.987l-4.285-16.77H58.323l-4.285 16.77c-5.038 1.16-9.77 3.12-14.035 5.767l-14.84-8.888-8.83 8.754 8.76 14.923c-2.75 4.357-4.802 9.2-5.993 14.374l-16.765 4.283v12.436l16.77 4.285c1.162 5.037 3.12 9.77 5.768 14.033l-8.888 14.84 8.753 8.83 14.926-8.76c4.357 2.75 9.2 4.8 14.373 5.99l4.283 16.768h12.435l4.286-16.77c5.037-1.162 9.767-3.12 14.033-5.768l14.84 8.89 8.832-8.755-8.764-14.927c2.752-4.355 4.8-9.2 5.99-14.37l16.768-4.284z"/>
                      <circle id="gear1" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="184.3549" strokeDashoffset="0" cx="64.541" cy="119.386" r="29.341"/>
                      <path id="gear2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="283.3648" strokeDashoffset="0" d="M150.365 33.19l-1.406-6.876-9.844-.456c-1.217-2.65-2.846-5.04-4.8-7.097l3.278-9.218-5.88-3.883-7.337 6.544c-2.74-1.025-5.673-1.6-8.693-1.67l-4.286-8.78-6.938 1.418-.495 9.758c-2.678 1.215-5.097 2.84-7.176 4.788l-9.284-3.22-3.938 5.847 6.575 7.25c-1.043 2.723-1.64 5.634-1.72 8.63l-8.868 4.28 1.406 6.875 9.84.456c1.216 2.65 2.845 5.043 4.803 7.1L92.32 64.15l5.885 3.884 7.337-6.545c2.74 1.023 5.674 1.604 8.695 1.672l4.284 8.78 6.94-1.42.493-9.76c2.68-1.215 5.096-2.837 7.178-4.787l9.284 3.222 3.937-5.848-6.575-7.253c1.044-2.72 1.64-5.633 1.718-8.627l8.872-4.28z"/>
                      <path id="gear3" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="332.5313" strokeDashoffset="0" d="M157.905 212.14l.792-8.233L147.862 200c-.45-3.408-1.446-6.662-2.925-9.655l6.828-9.262-5.23-6.407-10.44 4.853c-2.708-2.1-5.786-3.76-9.134-4.88l-1.77-11.377-8.233-.79-3.906 10.83c-3.405.448-6.665 1.445-9.657 2.923l-9.26-6.83-6.405 5.236 4.854 10.44c-2.1 2.71-3.768 5.786-4.884 9.135l-11.375 1.77-.79 8.235 10.83 3.904c.448 3.408 1.444 6.668 2.924 9.66l-6.83 9.258 5.236 6.405 10.442-4.855c2.708 2.1 5.783 3.766 9.134 4.884l1.77 11.374 8.23.79 3.907-10.83c3.408-.45 6.665-1.444 9.66-2.924l9.26 6.83 6.403-5.235-4.853-10.443c2.1-2.71 3.767-5.785 4.883-9.135l11.375-1.767z"/>
                      <circle id="gear4" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="55.74441" strokeDashoffset="0" cx="117.114" cy="204.062" r="8.872"/>
                  </svg>
  
                  </div>
                  <div className="uk-width-9-10" style={{padding:'10px', height: '150px'}}>
                      <h1>management</h1>
                      <p>I've been president of my college a cappella group (the <a href="http://www.cmutreblemakers.com"> Treblemakers</a>) for the last two years. In that time, I've learned a lot about what it takes to lead a group and take on large scale projects.</p>
                  </div>
          </div>
              {/* <!-- treble scroll --> */}
              <div className="uk-container uk-width-medium-1-1 uk-margin-remove uk-padding-remove">
                  <div className="uk-cover-background" style={{height: '200px', backgroundImage: `url(${trebleCrop})`}} data-uk-parallax="{bg: -400}"></div>
              </div>
  
          <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}}>
              <div className="uk-width-medium-1-1 uk-margin" style={{padding:'10px'}}>
                  <p>I manage every aspect of our 18 person group. We've booked a variety of paid gigs and won awards in competition. Just in the last two years, I've organized auditions for over 230 students. I understand <b>time management and working under pressure</b>. </p>
                  <p>I've planned two large scale concerts with 9 performing groups and over 400 attendees each. I understand what it takes to <b>get different organizations to work together</b>. I create and manage our budget, and I've tripled it in the last two years. I manage all travel, gigs, and performances, so I've learned to <b>work with an incredible range of people</b>. </p>
                  <p>Running a group like ours is a constantly developing project, and it's my job to keep us on track. Overall, I like to make good art, I work hard for a good product, and I can get a team to work together.</p>
              </div>
              
  
          </div>
      </div> 

      <div style={{height:'50px'}}></div>  
  
      {/* <!-- DESIGN --> */}
      <div id="design" className="uk-container uk-container-center uk-margin uk-responsive-width" style={{background:'#eee', marginLeft: '70px', marginRight:'70px', padding:'20px'}}>
  
          <div className="uk-grid uk-container-center" style={{paddingLeft:'40px', paddingRight:'40px'}} >
                  {/* <!-- header --> */}
                  <div className="uk-width-1-10 uk-padding-remove uk-margin-remove" data-uk-parallax="{pencilOffset:'500,0', viewport:0.5}">
                   
                  <svg xmlns="http://www.w3.org/2000/svg" width="160.56" height="246.96" viewBox="0 0 160.56 246.96">
                      <path id="pencil0" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="263.3704" strokeDashoffset="0" d="M33.504 190.262l24.658-8.563 2.88 27.155-57.936 34.742.365-67.55 24.832-11.366zM3.587 223.048c7.407-.34 14.898 4.812 17.787 10.14"/>
                      <path id="pencil1" fill="none" stroke="#74a2f8" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="403.19699" strokeDashoffset="0" d="M61.04 208.855l81.052-142.22s-.64-17.657-21.145-29.81c-20.91-11.45-36.427-3-36.427-3L3.47 176.05"/>
                      <path id="pencil2" fill="none" stroke="#303030" strokeWidth="5" strokeMiterlimit="10" strokeDasharray="267.6857" strokeDashoffset="0" d="M141.923 66.93l16.498-28.95s-.637-17.657-21.143-29.81c-20.908-11.45-36.427-3-36.427-3L84.353 34.12M108.106 59.357l-62.012 108.81"/>
                  </svg>
  
                  </div>
                  <div className="uk-width-9-10" style={{padding:'10px', height:'150px'}}>
                      <h1>design / branding</h1>
                      <p> Branding can be difficult. Creating a successful project isn't just about functionality, users have to like what they're seeing. That's what makes me valuable as a front end developer. Here are some things I've created for Treblemakers. Click any photo to open a gallery and use arrow keys to browse. </p> 
                  </div>
  
              <div className="uk-width-medium-1-1 uk-margin" style={{padding:'10px', paddingLeft:'80px'}}>
  
              {/* <!-- WORDMARK. show progression, tshirts, and tablecloth --> */}
              <a className="uk-overlay uk-margin-small" href={wordmark} data-uk-lightbox="{group:'wordmark'}" title="Finished version of the wordmark I designed for our group this year. You can explore more pictures by using the arrow keys.">
  
                  <img src={logos} width="400" height="200" alt=""/>
                  <figcaption className="uk-overlay-panel uk-overlay-bottom" style={{background:'rgba(200,200,200,0.7)', color:'#000'}}>
                      <p> Our wordmark. Click (and use arrow keys) to see more. </p>
                  </figcaption>
              </a>   
              <a href={shirt} data-uk-lightbox="{group:'wordmark'}" title="Our new tee-shirts!"></a>  
              <a href={tablecloth} data-uk-lightbox="{group:'wordmark'}" title="I actually did the screenprinting on this tablecloth by hand. We use it for advertising and recruitment throughout the year."></a>  
              <a href={alumni} data-uk-lightbox="{group:'wordmark'}" title="I put together some care packages for our alumni with our new branding."></a>  
  
  
              {/* <!-- RECRUITMENT. all bubble people --> */}
              <a className="uk-overlay uk-margin-small" href={recruitposter} data-uk-lightbox="{group:'bubblepeople'}" title="I created the designs for our recruitment campaign, which pulled in over 100 auditionees. You can explore more pictures by using the arrow keys. ">
  
                  <img src={recruitposter} width="400" height="200" alt=""/>
                  <figcaption className="uk-overlay-panel uk-overlay-bottom" style={{background:'rgba(200,200,200,0.7)', color:'#000'}}>
                      <p> Our recruitment posters. Click (and use arrow keys) to see more.  </p>
                  </figcaption>
              </a>   
              <a href={profilePicture} data-uk-lightbox="{group:'bubblepeople'}" title="I made profile pictures for each member to bring attention to our social media efforts. This one is mine."></a>  
  
  
              {/* <!-- ADVERTISEMENT. all possible posters. --> */}
  
              <a className="uk-overlay uk-margin-small" href={amacCover} data-uk-lightbox="{group:'posters'}" title="The cover photo I designed for our Almost Midnight A Cappella concert.">
  
                  <img src={amac} width="800" height="400" alt=""/>
                  <figcaption className="uk-overlay-panel uk-overlay-bottom" style={{background:'rgba(200,200,200,0.7)', color:'#000'}}>
                      <p> I've made many posters for our concerts and events. Click (and use arrow keys) to see more.</p>
                  </figcaption>
              </a>  
              <a href={amac1} data-uk-lightbox="{group:'posters'}" title="A full version of our Almost Midnight A Cappella poster."></a>   
              <a href={amac2} data-uk-lightbox="{group:'posters'}" title="Another Almost Midnight A Cappella poster. "></a>  
              <a href={auditionSpray} data-uk-lightbox="{group:'posters'}" title="Another recruitment poster."></a> 
  
          </div>
          </div>
      </div> 
      </div> 
    )
  }
}
