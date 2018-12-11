import React, {Component, Fragment} from 'react';
import './Contact.css';
import email from './email-icon.jpg';
import github from './github-icon.jpg';
import linkedin from './linkedin.jpg';
import so from './so-icon.jpg';

class Contact extends Component {
	render() {
		return (
			<Fragment>
				<div className="contact-wrapper">
					<div className="contact-container">
			            <h2 className="contact-title">Want to work together?</h2>
						<h3 className="contact-sub-title">Im currently seeking new opportunities.</h3>
						<div className="contact-icon-wrapper">
						<a href="https://www.linkedin.com/in/erikasland/" target="_blank" rel="noopener noreferrer">
							<img alt="Linkedin Icon." src={linkedin}/>
						</a>
						<a href="https://stackoverflow.com/users/5182047/erik-%C3%85sland" target="_blank" rel="noopener noreferrer">
							<img alt="Stack Overflow Icon." src={so}/>
						</a>
						<a href="https://github.com/erikasland" target="_blank" rel="noopener noreferrer">
							<img alt="Github Icon." src={github}/>
						</a>
						<a href="mailto:erikasland87@gmail.com" target="_blank" rel="noopener noreferrer">
							<img alt="Email Icon." src={email}/>
						</a>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Contact;
