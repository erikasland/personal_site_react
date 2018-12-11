import React, {Component, Fragment} from 'react';
import './selfie.css';
import selfie from './selfie.jpg';

class Selfie extends Component {
	render() {
		return (
			<Fragment>
				<div className="selfie-wrapper">
					<img className="selfie" alt="Erik Åsland looking cool." src={selfie}/>
				</div>
			</Fragment>
		);
	}
}

export default Selfie;