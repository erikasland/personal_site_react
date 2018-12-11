import React, { Component, Fragment } from 'react';
import './Landing-Middle.css';


class LandingMiddle extends Component {
    state = {
        titles: ["Web Applications", "Pipelines", "with Python", "with Django", "with Javascript", "with React", "with AngularJS", "with jQuery", "with Google Cloud Platform"],
        titleCount: 0,
        letterCount: 0,
        sentence: "",
        pausedCount: 0
    }

    updateTitle = (intervalInstance) => {
        if( this.state.pausedCount !== 0 && this.state.pausedCount !== 20 ){
            if(this.state.pausedCount === 19){
                this.setState( { pausedCount: 0, sentence: ""} )
            }else{
                this.setState( { pausedCount: this.state.pausedCount + 1} )
            }
        }else if( this.state.titleCount === this.state.titles.length ){
            this.setState( { titleCount: 0, letterCount: 0, sentence: "" } )
        }else if( this.state.titles[this.state.titleCount].length !== this.state.letterCount ){
            this.setState( { sentence: this.state.sentence += this.state.titles[this.state.titleCount][this.state.letterCount++] } )
        }else if( this.state.titles[this.state.titleCount].length === this.state.letterCount ){
            this.setState( { titleCount: this.state.titleCount + 1, letterCount: 0, pausedCount: this.state.pausedCount + 1 } )
        }
    }

    initInterval = () => {
        var _this = this;
        
        _this.interval = setInterval(function(){
            _this.updateTitle( _this.interval );
        }, 100)
    }

    componentDidMount(){
        this.initInterval();
    }

  render() {
    return (
		<Fragment>
            <div className="intro-div">
				<div className="intro-container">
					<h1 className="intro-title">
						<span>I build &amp; design</span><br></br>
						<span className="blinking-title">{this.state.sentence}</span>
					</h1>
					<div className="hire-me-btn-container">
						<button className="hire-me-btn" >LET'S CONNECT</button>
					</div>
				</div>
			</div>
		</Fragment>
    );
  }
}

export default LandingMiddle;
