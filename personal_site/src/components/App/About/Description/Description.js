import React, {Component, Fragment} from 'react';
import './description.css';

class Description extends Component {
	render() {
		return (
			<Fragment>
				<div className="description-wrapper">
					<div className="upper-line"></div>
					<div className="description-container">
						<p>As a driven Full-Stack Developer possessing an obsession for both Javascript and Python, I seek to leverage latest technologies to change the face of human experience. I possess a constant growth mentality and a hunger to stay current with my craft, making me an asset in everchanging environments. I spend most of my freetime coding, hiking, or attending tech mixers. On a deep level, I believe that we now live in the most exhilarating era in known human history. I just want to contribute to that excitement through my work.</p>
					</div>
					<div className="lower-line"></div>
				</div>
			</Fragment>
		);
	}
}

export default Description;
