import React, { Component, Fragment } from 'react';
import './App.css';
import Landing from './Landing/Landing.js';
import About from './About/About.js';
import Technologies from './Technologies/Technologies.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Landing />
      	<About />
      	<Technologies />
        <Contact />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
