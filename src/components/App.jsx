import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback;
    Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage } = this.state;

    return (
      <>
        <FeedbackOptions />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />

      </>
    );
  }
};
