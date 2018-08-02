import React, { Component } from 'react';
import logos from '../static-resources/logo_grid.png';
import amac from '../static-resources/AMAC_cover.jpg';
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

export default class Design extends Component {
  render() {
    return (
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
    )
  }
}
