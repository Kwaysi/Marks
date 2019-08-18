import React, { Component } from 'react';

// Components
import {AnimateInOut} from './common/AnimateInOut';
class ScreenFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.stepTwo = this.stepTwo.bind(this);
  }
  
  stepTwo() {
    this.setState({
      show: false
    })
    setTimeout(() => {this.props.history.push('/2')}, 500);
  }
  
  render () {
    const { show } = this.state;
    return (
      <AnimateInOut classname={show ? 'slide-in-bottom':'slide-out-left'}>
        <div className="end-screen">
          
        </div>
      </AnimateInOut>
    );
  }
}

export default ScreenFive;