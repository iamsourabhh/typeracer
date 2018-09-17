import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import TypeRacer from "./pages/TypeRacer/TypeRacer";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <React.Fragment>
            <Route component={TypeRacer} path="/" />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
