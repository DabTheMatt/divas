import React, { Component } from "react";
import styled from "styled-components";
import Shape from "./Shape";

class Frame extends Component {
  state = {
      x: 0,
      y: 0,
      dots: []
  };

  startDot = () => {
    const start = setInterval(()=>{this.makeDot()}, 300)
  }

  makeDot = () => {
    
    const randomX = Math.floor(Math.random() * (this.props.height-5)+5);
    const randomY = Math.floor(Math.random() * (this.props.height-5)+5);
    console.log(randomX, randomY)
    let tempDots = this.state.dots;
    tempDots.push("dot");
    this.setState({
        x: randomX,
        y: randomY,
        dots: tempDots
    })
  };

  

  render() {
    return (
      <FlexWrapper>
        <FrameWrapper
          propsHeight={this.props.height}
          propsWidth={this.props.width}
          propsColor={this.props.color}
        >
            {this.state.dots.map(el => {
                return(
                    <Shape 
          top={this.state.x}
          left={this.state.y}
          />
                )
            })}
          <Shape 
          top={this.state.x}
          left={this.state.y}
          />

        </FrameWrapper>
        <br/>
        <button onClick={this.startDot}>make</button>
        <button onClick={this.stopDot}>make</button>
        <p>
          Frame size: {this.props.height} / {this.props.width}{" "}
        </p>
        <p>Image proportion: </p>
      </FlexWrapper>
    );
  }
}

export const FrameWrapper = styled.div`
  height: ${(props) => `${props.propsHeight}px` || "0px"};
  width: ${(props) => `${props.propsWidth}px` || "0px"};

  background: ${(props) => props.propsColor || "lightgrey"};
`;

export const FlexWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Frame;
