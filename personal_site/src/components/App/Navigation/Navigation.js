import React, {Component, Fragment} from 'react';
import './Navigation.css';

class Navigation extends Component {

	state = {
		aboutNavToggled: false,
		techNavToggled: false,
		projectNavToggled: false,
		contactNavToggled: false
	}

	toggleNavTitle = (event) => {
		const navTitle = event.currentTarget.id;
		var newState = {};

		if(this.state[navTitle] === false){
			newState[navTitle] = true;
		}else{
			newState[navTitle] = false;
		}

		this.setState(newState);
	}

	render(){
		return(
			<Fragment>
				<div className="nav-wrapper" >
					<ol onMouseEnter={this.toggleNavTitle} onMouseLeave={this.toggleNavTitle} id="contactNavToggled"><li className={this.state.contactNavToggled ? "visible navTitle":"hidden navTitle"}>CONTACT</li><li className={this.state.contactNavToggled ? "nav-dot-hover nav-dot":"nav-dot"}></li></ol>
					<ol onMouseEnter={this.toggleNavTitle} onMouseLeave={this.toggleNavTitle} id="projectNavToggled"><li className={this.state.projectNavToggled ? "visible navTitle":"hidden navTitle"}>PROJECTS</li><li className={this.state.projectNavToggled ? "nav-dot-hover nav-dot":"nav-dot"}></li></ol>
					<ol onMouseEnter={this.toggleNavTitle} onMouseLeave={this.toggleNavTitle} id="techNavToggled"><li className={this.state.techNavToggled ? "visible navTitle":"hidden navTitle"}>TECHNOLOGIES</li><li className={this.state.techNavToggled ? "nav-dot-hover nav-dot":"nav-dot"}></li></ol>
					<ol onMouseEnter={this.toggleNavTitle} onMouseLeave={this.toggleNavTitle} id='aboutNavToggled'><li className={this.state.aboutNavToggled ? "visible navTitle":"hidden navTitle"}>ABOUT</li><li className={this.state.aboutNavToggled ? "nav-dot-hover nav-dot":"nav-dot"}></li></ol>
				</div>
			</Fragment>
		)
	}
}

export default Navigation;