import "./App.css";
import Main from "./components/Main";
import styled from "styled-components";

import React, { Component } from "react";

class App extends Component {
  state = {
    crt: false,
    crtClass: "",
    btn: "OFF",
    bcg: "#2dc653",
  };

  handleCRT = () => {
    if (this.state.crt) {
      this.setState({
        crt: !this.state.crt,
        crtClass: "",
        btn: "OFF",
        bcg: "#2dff53",
      });
    } else {
      this.setState({
        crt: !this.state.crt,
        crtClass: "flick",
        btn: "ON",
        bcg: "#2dc653",
      });
    }

    console.log("class", this.state.crtClass);
  };

  render() {
    return (
      <inAppWrapper>
        <div className={this.state.crtClass}>
          <button
            onClick={this.handleCRT}
            style={{ background: this.state.bcg }}
          >
            Old CRT mode {this.state.btn}
          </button>

          <Main />
        </div>
      </inAppWrapper>
    );
  }
}

export const inAppWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  button {
    padding: 2rem;
    margin-left: 5rem;
  }
`;
export default App;
