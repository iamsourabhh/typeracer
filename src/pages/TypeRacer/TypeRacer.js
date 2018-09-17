import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomText, onInput, raceComplete } from "./TypeRacer.action";
import Timer from "../../components/Timer";

class TypeRacer extends Component {
  componentDidMount() {
    this.props.getRandomText();
  }
  onChange = event => {
    const text = event.target.value;

    this.props.onInput(text);
  };
  render() {
    const {
      randomText,
      inputText,
      isError,
      errorText,
      matchedText,
      wordCount,
      disableType,
      toShowResults,
      raceComplete,
      isLoading
    } = this.props;
    return (
      <React.Fragment>
        {isLoading && <h1>Loading</h1>}
        {!isLoading && (
          <div style={{ padding: "10%" }}>
            <div style={{ padding: "20px" }}>
              <p>
                <span style={{ color: "aqua" }}>{matchedText}</span>
                {isError && (
                  <span style={{ backgroundColor: "red", color: "white" }}>
                    {errorText}
                  </span>
                )}
                {randomText}
              </p>
            </div>
            <textarea
              style={{ width: "100%", padding: "20px" }}
              rows="4"
              disabled={disableType}
              value={inputText}
              onChange={this.onChange}
            />
            <h2>
              <Timer
                seconds={120}
                onTimerComplete={raceComplete}
                startTimer={true}
              />
            </h2>
            <h2>{wordCount} Words</h2>
            {toShowResults && (
              <div>
                {wordCount / 2} words per minute <br />
                <br />
                <input
                  type="submit"
                  value="Restart"
                  onClick={() => {
                    window.location.reload();
                  }}
                />
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    randomText: state.app.newText,
    matchedText: state.app.matchedText,
    errorText: state.app.errorText,
    isError: state.app.isError,
    inputText: state.app.inputText,
    isLoading: state.app.isLoading,
    wordCount: state.app.wordCount,
    toShowResults: state.app.toShowResults,
    disableType: state.app.disableType
  };
};
export default connect(
  mapStateToProps,
  { getRandomText, onInput, raceComplete }
)(TypeRacer);
