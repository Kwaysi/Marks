import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { connect } from 'react-redux';
import {AnimateInOut} from './common/AnimateInOut';

// images 
import Question from './common/Questions';

class ScreenFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cn: null,
      color: '#33691E'
    }
    this.nextStep = this.nextStep.bind(this);
  }

  componentDidMount() {
    setTimeout(()=>this.setState({color:'#E65100'}), 30000)
    setTimeout(()=>this.setState({cn:'ping', color:'#ff2323'}), 45000)
  }

  nextStep() {
    setTimeout(() => {this.props.history.push('/5')},500);
  }

  render() {
    const {cn, color} = this.state;
    return (
      <AnimateInOut classname="scale-in-center">
        <div className={`game ${this.props.flash ? 'staticGame' : 'animatedGame'}`}>
          <AnimateInOut classname={`scale-in-center top-left ${cn}`}>
            <ReactCountdownClock seconds={60} color={color} alpha={0.9} size={80} weight={20} onComplete={() => this.nextStep()}/>
          </AnimateInOut>
          <Question />
        </div>
      </AnimateInOut>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flash: state.Game.disableFlash
  }
}

export default connect(mapStateToProps)(ScreenFour);
