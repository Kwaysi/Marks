import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { AnimateInOut } from './AnimateInOut';
import { brandDetails, allBrands } from '../data';
import './css/Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      question: 0,
      questions: 0,
      score: 1,
    };
  }

  get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
  };

  renderQuestion() {
    const { question } = this.state;

    if (question < brandDetails.length) {
      const options = [
        brandDetails[question].name,
        this.get_random(allBrands),
        this.get_random(allBrands),
        this.get_random(allBrands),
      ]

      return (
        <div>
          <div className="iconbg">
            <img src={brandDetails[question].icon} alt="icon" width={200} />
          </div>
          <div>
            {
              options.map((elem, index) => {
                return <Checkbox name="options" key={index} label={elem} id={`a${index}`} onclick={() => this.nextQuestion(elem)} />;
              })
            }
          </div>
        </div>
      );
    }

    return <p>No more Questions</p>;
  }

  nextQuestion(answer) {
    const { question, score, questions } = this.state;
    const correct = answer === brandDetails[question].name;
    console.log(correct);

    this.setState({
      answered: true,
      score: correct ? score + 1 : score,
      questions: questions+1
    });

    console.log(this.state.score);

    setTimeout(() => {
      this.setState({ answered: false, question: this.state.question + 1 });
    }, 500)
  }

  render() {
    const { answered } = this.state;
    const showQuestion = this.renderQuestion();
    return (
      <AnimateInOut classname={answered ? 'slide-out-top' : 'slide-in-bottom'}>
        {showQuestion}
      </AnimateInOut>
    );
  }
}

export default Question;