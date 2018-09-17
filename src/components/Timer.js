import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds
    };
  }
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 }, () => {
        if (this.state.seconds === 0) {
          this.props.onTimerComplete();
          clearInterval(timer);
        }
      });
    }, 1000);
  }

  formatSeconds = seconds => {
    const minutes = Math.floor((seconds / 60) % 60);

    const second = seconds % 60;

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (second < 10 ? "0" + second : second)
    );
  };
  render() {
    return (
      <React.Fragment>{this.formatSeconds(this.state.seconds)}</React.Fragment>
    );
  }
}

export default Timer;
