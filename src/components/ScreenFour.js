import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import {AnimateInOut} from './common/AnimateInOut';
import _ from 'lodash';

// images 
import Question from './common/Questions';

class ScreenFour extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    setTimeout(() => {this.props.history.push('/5')},500);
  }

  render() {
    return (
      <div className="center-box">
        <AnimateInOut classname="scale-in-center">
          <ReactCountdownClock seconds={60} color="#000" alpha={0.9} size={80} weight={20} onComplete={() => this.nextStep()}
          />
        </AnimateInOut>
        <Question />
      </div>
    );
  }
}

export default ScreenFour;
