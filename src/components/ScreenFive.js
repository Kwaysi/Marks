import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
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
      this.props.history.push('/');
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
            <button className="btn-white hvr-grow">Play Again </button>
            <div className="details">
              <h1>Did you literally just crawl out from Abeokuta?</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <div className="share">
                <FacebookIcon url={'https://creosis.com'} size={32} round={true}/>
                <TwitterIcon url={'https://creosis.com'} size={32} round={true}/>
                <WhatsappIcon url={'https://creosis.com'} size={32} round={true}/>
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