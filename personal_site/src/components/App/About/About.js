import React, {Component, Fragment} from 'react';
import './About.css';
import Selfie from './Selfie/Selfie.js';
import Description from './Description/Description.js';

class About extends Component {
	render() {
		return (
			<Fragment>
				<div className="about-wrapper">
					<Selfie />
					<Description />
				</div>
			</Fragment>
		);
	}
}

export default About;