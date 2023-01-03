import { Component } from "react"
import FeedbackControls from "./FeedbackControls/FeedbackControls";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <>
        <FeedbackControls />
      </>
    );
  }
};
