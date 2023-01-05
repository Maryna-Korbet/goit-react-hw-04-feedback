import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

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
    const { good, neutral, bad} = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentag = this.countPositiveFeedbackPercentage();

    return (
      <>
        
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
          { totalFeedback === 0 ?
            (<Notification message="There is no feedback" />) :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentag}
            />
          }
        </Section>
      </>
    );
  }
};
