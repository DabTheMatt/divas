import React, { Component } from "react";
import styled from "styled-components";
const random = Math.random() * 100;

class Shape extends Component {
  render() {
    console.log(this.props.top);
    return (
      <div>
        <ShapeStyler
          top={this.props.top}
          left={this.props.left}
          color={this.props.color}
        >
          <div></div>
        </ShapeStyler>
      </div>
    );
  }
}

export const ShapeStyler = styled.div`
  background: ${(props) => `${props.color}` || "#90e0ef"};
  height: 2%;
  width: 2%;
  position: absolute;
  top: ${(props) => `${props.top}px` || "0px"};
  left: ${(props) => `${props.left}px` || "0px"};
  animation: drop 1.5s ease-in-out;
  @keyframes drop {
    0% {
      background: #90e0ef; 
    }
    50% {
      background: #48cae4;
    }
    100% {
      height: 8%;
      width: 1%;
      background: transparent;
      top: 92%;
    }
  }
`;

export default Shape;