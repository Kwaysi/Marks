import React, { Component } from 'react';

// Components
import Input from './common/Input';
import Button from './common/Button';
import {AnimateInOut} from './common/AnimateInOut';

// Assets
import arrowLight from '../Assets/images/arrow-light.svg';
import arrowDark from '../Assets/images/arrow-dark.svg';

class ScreenOne extends Component {
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
      <AnimateInOut classname={show ? 'slide-in-top':'slide-out-left'}>
        <div className={`center-box`}>
          <div>
            <h1>Choose a username and<br/>enter your email address:</h1>
            <img src={arrowDark} alt="arrow dark" />
            <Input />
            <Input />
            <Button onclick={this.stepTwo}><img src={arrowLight} alt="arrow light" /></Button>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

export default ScreenOne;