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
      <AnimateInOut classname={show ? 'slide-in-right blink-2 one':'slide-out-left'}>
        <div className="center-box">
          <div>
            <h1>Match as many icons to their brand name in 60 seconds</h1>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

export default ScreenTwo;