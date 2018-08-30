import React, { Component, Fragment } from 'react';
import './Landing-Middle.css';

class LandingMiddle extends Component {
  render() {
    return (
		<Fragment>
			<div className="intro-div">
				<div className="intro-container">
					<h1 className="intro-title">
						<span>I build &amp; design</span><br></br>
						<span className="changing-text">with Python.</span>
					</h1>
					<div className="hire-me-btn-container">
						<button className="hire-me-btn">LET'S CONNECT</button>
					</div>
				</div>
			</div>
		</Fragment>
    );
  }
}

export default LandingMiddle;