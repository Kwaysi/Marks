import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';
import { connect } from 'react-redux';
import _ from 'lodash';
import Checkbox from './Checkbox';
import { AnimateInOut } from './AnimateInOut';
import { brandDetails, allBrands } from '../data';
import { setScores } from '../../actions/GameActions';
import './css/Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      brandDet: _.shuffle(brandDetails),
      question: 0,
      questions: 0,
      score: 0,
      missed: 0,
      skipped: 0,
    };
  }

  get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
  };

  componentDidMount() {
    const { score, missed, skipped } = this.state;
    this.props.setScores({score, missed, skipped})
  }

  renderQuestion() {
    const { question, brandDet } = this.state;

    if (question < brandDet.length) {
      const options = [
        brandDet[question].name,
      ]

      var i;
      let opt;

      for (i = 0; i < 3; i++) {
        opt = this.get_random(allBrands);
        while (options.includes(opt)) {
          let sh_allBrands = _.shuffle(allBrands);
          opt = this.get_random(sh_allBrands);
        }
        if (!options.includes(opt)) {
          options.push(opt);
        }
      }

      const shuffled = _.shuffle(options);

      return (
        <div>
          <div className="iconbg">
            <img src={brandDet[question].icon} alt="icon" width={200} />
          </div>
          <div>
            {
              shuffled.map((elem, index) => {
                return <Checkbox name="options" key={index} cn={this.props.flash ? 'lbl-white' : ''} label={elem} id={`a${index}`} onclick={() => this.nextQuestion(elem)} />;
              })
            }
          </div>
        </div>
      );
    } else 

    return <Redirect to={'/5'} />;
  }

  nextQuestion(answer) {
    const { question, score, questions, missed, skipped, brandDet } = this.state;
    const correct = answer === brandDet[question].name;

    this.setState({
      answered: true,
      score: correct ? score + 1 : score,
      missed: (!correct && !(answer === 'league')) ? missed + 1 : missed,
      skipped: answer === 'league' ? skipped + 1 : skipped,
      questions: questions+1
    });

    setTimeout(() => {
      const { score, missed, skipped } = this.state;
      this.setState({ answered: false, question: this.state.question + 1 });
      this.props.setScores({score, missed, skipped})
    }, 500)
  }

  render() {
    const { answered } = this.state;
    const showQuestion = this.renderQuestion();
    return (
      
        <AnimateInOut classname={answered ? 'slide-out-top' : 'slide-in-bottom'}>
          <Swipeable onSwipedUp={() => this.nextQuestion('league')}>
            {showQuestion}
          </Swipeable>
        </AnimateInOut>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flash: state.Game.disableFlash
  }
}

export default connect(mapStateToProps, { setScores })(Question);