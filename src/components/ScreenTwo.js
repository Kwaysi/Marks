import React, { Component } from 'react';
import {AnimateInOut} from './common/AnimateInOut';

class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.nextStep = this.nextStep.bind(this);
  }

  componentDidMount() {
    setTimeout(()=>{this.nextStep()}, 3000);
  }
  
  nextStep() {
    this.setState({
      show: false
    })
    setTimeout(() => {this.props.history.push('/3')}, 500);
  }
  
  render () {
    const { show } = this.state;
    return (
      <AnimateInOut classname={show ? 'slide-in-right blink-2':'slide-out-left'}>
        <div className="center-box">
          <div>
            <h1>You're going to be shown the logos of nigerian companies, the goal is to match as many logos to the right name in 60seconds</h1>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

export default ScreenTwo;