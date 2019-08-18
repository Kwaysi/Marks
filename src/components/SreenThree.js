import React, { Component } from 'react';
import {AnimateInOut} from './common/AnimateInOut';
import Button from './common/Button';
// Assets
import Swipe from '../Assets/images/swipe.svg';
import Tap from '../Assets/images/tap.svg';

class ScreenThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.nextStep = this.nextStep.bind(this);
  }
  
  nextStep() {
    this.setState({
      show: false
    })
    setTimeout(() => {this.props.history.push('/4')},500);
  }
  
  render () {
    const { show } = this.state;
    return (
      <AnimateInOut classname={show ? 'slide-in-right':'scale-out-center'}>
        <div className="center-box">
          <div>
            <h1>Tap the correct option to choose an answer.</h1>
            <img src={Tap} alt="arrow dark" width={60}/>
            <h1>Swipe up to skip a question.</h1>
            <img src={Swipe} alt="arrow dark" width={60}/><br/>
            <Button onclick={this.nextStep}>Start!</Button>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

export default ScreenThree;