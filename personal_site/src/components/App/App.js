import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Landing from './Landing/Landing.js';
import About from './About/About.js';
import Technologies from './Technologies/Technologies.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import Navigation from './Navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Header/>
        <Landing />
      	<About />
      	<Technologies />
        <Contact />
      	<Footer />
        <Navigation />
      </Fragment>
    );
  }
}

export default App;
