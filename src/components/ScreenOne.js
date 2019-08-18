import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Input from './common/Input';
import Button from './common/Button';
import {AnimateInOut} from './common/AnimateInOut';
import { setUserDetails } from '../actions/GameActions';

// Assets
import arrowLight from '../Assets/images/arrow-light.svg';
import arrowDark from '../Assets/images/arrow-dark.svg';

class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      email: null,
      name: null,
      cn: null
    };
    this.stepTwo = this.stepTwo.bind(this);
  }
  
  stepTwo() {
    const { email, name } = this.state;

    console.log(email);
    console.log(ValidateEmail(email));

    if (ValidateEmail(email) && (name !== '')) {
      this.props.setUserDetails({email, name});
      this.setState({
        show: false
      })
      setTimeout(() => {this.props.history.push('/2')}, 500);
    } else {
      this.setState({
        cn: 'shake-lr'
      })
      setTimeout(()=>this.setState({cn:null}), 1000)
    }
  }

  handChange = (e) => {
    const { value, name } = e.target;
    
    this.setState({
      [name]: value
    })

    console.log(this.state);
  };
  
  render () {
    const { show, email, name, cn } = this.state;
    return (
      <AnimateInOut classname={show ? 'slide-in-top one':'slide-out-left'}>
        <div className={`center-box`}>
          <div>
            <h1>Choose a username and enter your email address:</h1>
            <img src={arrowDark} alt="arrow dark" />
            <Input label="Your name" type="text" placeHolder="Your name" name="name" handleChange={this.handChange} value={name}/>
            <Input label="Your email" type="email" placeHolder="example@domain.com" name="email" handleChange={this.handChange} value={email} cn={cn} />
            <Button onclick={this.stepTwo}><img src={arrowLight} alt="arrow light" /></Button>
          </div>
        </div>
      </AnimateInOut>
    );
  }
}

const ValidateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
};

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {setUserDetails})(ScreenOne);