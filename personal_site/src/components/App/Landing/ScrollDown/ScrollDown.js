import React, { Component, Fragment } from 'react';
import './down-arrow.css';
import arrow from './downarrow.png';

class ScrollDown extends Component {
  render() {
    return (
      <Fragment>
      	<div className="down-arrow-wrapper">
      		<img className="down-arrow" src={arrow} />
      	</div>
      </Fragment>
    );
  }
}

export default ScrollDown;
