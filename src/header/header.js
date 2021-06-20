import React, { Component } from 'react';
import image1 from '../static-resources/websitebackground3.png'

export default class Header extends Component {
  render() {
    return (
      <div id="headerblock" className="uk-container uk-position-relative uk-container-center uk-margin-remove uk-padding-remove uk-responsive-width" >
        <div className="uk-cover">
          <img src={image1}></img>   
        </div>
        <div className="uk-position-cover uk-flex uk-flex-middle" >
        <div id = "headertextblock" className="uk-flex uk-flex-left uk-flex-middle uk-width-1-2 "> 
          <div id = "headertext" className="uk-container uk-container-center" data-uk-parallax="{opacity: 0, viewport: 0.5, y: -80}"> 
          <h1 className="header"> Hello. </h1> 
          <p> My name is Reagan Henke. I studied Psychology and Computer Science at Carnegie Mellon University. I have experience as a software engineer with Best Nomos Medical and as a research assistant and editor. </p>
          <p> In my free time, I manage my a cappella group. I'm a passionate musician and I love to sing. Go ahead and check out my <a href= "https://github.com/reaganhenke/">Github</a>.</p> 
        </div>
      </div>
      
      <div className="uk-flex uk-flex-right uk-flex-middle uk-width-1-2"> 
        <div className="uk-container uk-container-center " data-uk-parallax="{y: -80}"> 
        </div>
      </div>
      </div>
      </div>  
    )
  }
}
