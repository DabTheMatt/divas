import React, { Component } from "react";
import styled from "styled-components";

class Frame extends Component {
  state = {};

  render() {
    return (
      <FlexWrapper>
        <FrameWrapper
          propsHeight={this.props.height}
          propsWidth={this.props.width}
          propsColor={this.props.color}
        ></FrameWrapper>
        <p>
          Frame size: {this.props.height} / {this.props.width}{" "}
        </p>
        <p>Image proportion: </p>
      </FlexWrapper>
    );
  }
}

export const FrameWrapper = styled.div`
  height: ${(props) => props.propsHeight || "0px"};
  width: ${(props) => props.propsWidth || "0px"};

  background: ${(props => props.propsColor || "lightgrey")}
`;

export const FlexWrapper = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;

export default Frame;
