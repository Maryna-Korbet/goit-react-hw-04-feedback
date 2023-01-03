import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () =>{
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }
  
  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

      </>
    );
  }
};
