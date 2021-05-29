import React, { Component } from "react";
import styled from "styled-components";
import Installation from "./Installation";
import HelloWorld from "./HelloWorld";
import Comments from "./Comments";
import Variables from "./Variables";
import Numbers from "./Numbers";
import Strings from "./Strings";

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <h1>My PHP adventures</h1>
        <ul>
          <a href="#installation">
            <li>Installation</li>
          </a>
          <a href="#helloworld">
            <li>Hello World</li>
          </a>
          <a href="#comments">
            <li>Comments</li>
          </a>
          <a href="#variables">
            <li>Variables</li>
          </a>
          <a href="#constants">
            <li>Constants</li>
          </a>
          <a href="#numbers">
            <li>Numbers</li>
          </a>
          <a href="#strings">
            <li>Strings</li>
          </a>
        </ul>

        <Installation />
        <HelloWorld />
        <Comments />
        <Variables />
        <Numbers />
        <Strings />
      </MainWrapper>
    );
  }
}

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  margin-bottom: 3rem;

  h1 {
    text-align: center;
  }
`;

export const ListOfContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;

  p {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export default Main;
