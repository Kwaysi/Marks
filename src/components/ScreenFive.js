import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton, 
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';

// Components
import { AnimateInOut } from './common/AnimateInOut';
class ScreenFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.stepTwo = this.stepTwo.bind(this);
  }

  componentWillMount () {
    if(!this.props.email || !this.props.performance) {
      // this.props.history.push('/');
    }
  }

  stepTwo() {
    this.setState({
      show: false
    })
    setTimeout(() => { this.props.history.push('/2') }, 500);
  }

  render() {
    const { show } = this.state;
    const { score, missed, skipped } = this.props.performance;
    const msg = `I identified ${score}, miseed ${missed} & skipped ${skipped}. How many logos can you identify in 60 seconds?`
    
    return (
      <AnimateInOut classname={show ? 'slide-in-bottom' : 'slide-out-left'}>
        <div className="end-screen">
          <div className="container">
            <h1>Hi {this.props.name}, your Score</h1>
            <h2 className="score">{score}</h2>
            <div className="stats">
              <div>
                <h3>{missed}</h3>
                <p>Missed</p>
              </div>
              <div>
                <h3>{skipped}</h3>
                <p>Skipped</p>
              </div>
            </div>
            <button className="btn-white hvr-grow" onClick={()=> this.props.history.push('/3')}>Play Again </button>
            <div className="details">
              <h1>Share your results with your friends!</h1>
              <div className="share">
                <FacebookShareButton url={'https://marks.creosis.com.ng'} quote={msg}>
                  <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url={'https://marks.creosis.com.ng'} title={msg}>
                  <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <WhatsappShareButton url={'https://marks.creosis.com.ng'} title={msg}>
                  <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
              </div>
              <div className="contact">
                <h3>Want to build an interactive web/mobile experience for your users?</h3>
                <p>Send an email to <a href="mailto:hello@creosis.com">hello@creosis.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

const mapStateToProps = (state) => {
  const { performance, user } = state.Game
  return {
    performance: performance && performance,
    email: user && user.email,
    name: user && user.name
  }
}

export default connect(mapStateToProps)(ScreenFive);