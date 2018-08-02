import React, { Component } from 'react';
import musicclips from '../static-resources/musicclips.mp4';
import knitclips from '../static-resources/knitclips.mp4';

export default class Classwork extends Component {
  render() {
    return (
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
    )
  }
}
