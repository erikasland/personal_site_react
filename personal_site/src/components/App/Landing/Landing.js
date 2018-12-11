import React, { Component, Fragment } from 'react';
import './Landing.css';
import LandingMiddle from './LandingMiddle/LandingMiddle.js';
import ScrollDown from './ScrollDown/ScrollDown.js';
import Background from './Background/Background.js';


class Landing extends Component {
  render() {
    return (
    	<div className="landing-wrapper">
	        <Background />
  			<LandingMiddle /> 
  			<ScrollDown /> 
    	</div>
    );
  }
}

export default Landing;