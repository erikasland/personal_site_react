import React, { Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {
	state = {
		"headerClass": "header-common",
		"headerTitle": "ERIK ÅSLAND"
	}
	componentDidMount(){
		this.setState({
			"landingOffsetTop": document.getElementsByClassName("landing-wrapper")[0]["offsetTop"],
			"aboutOffsetTop": document.getElementsByClassName("about-wrapper")[0]["offsetTop"]-60,
			"techOffsetTop": document.getElementsByClassName("technologies-wrapper")[0]["offsetTop"]-60,
			"contactsOffsetTop": document.getElementsByClassName("contact-wrapper")[0]["offsetTop"]-60,
		})
		window.addEventListener('scroll', this.handleHeaderOnScroll);
	}

	handleHeaderOnScroll = () => {
		if(window.scrollY < this.state.aboutOffsetTop){
			this.setState({
				"headerClass": "header-common",
				"headerTitle": "ERIK ÅSLAND"
			})
		}else if((window.scrollY >= this.state.aboutOffsetTop) && (window.scrollY < this.state.techOffsetTop)){
			this.setState({
				"headerClass": "header-common not-landing-header",
				"headerTitle": "ABOUT"
			})
			console.log(this.state)
		}else if((window.scrollY >= this.state.techOffsetTop) && (window.scrollY < this.state.contactsOffsetTop)){
			this.setState({
				"headerClass": "header-common not-landing-header",
				"headerTitle": "TECH"
			})
		}else if((window.scrollY >= this.state.contactsOffsetTop)){
			this.setState({
				"headerClass": "header-common not-landing-header",
				"headerTitle": "CONTACT"
			})
		}
	}

	render() {
		return (
				<Fragment>
					<header className={this.state.headerClass}>
						<h1>{this.state.headerTitle}</h1>
					</header>
				</Fragment>
			);
		}
	}

	export default Header;