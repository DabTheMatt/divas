import React, { Component } from "react";
import styled from "styled-components";
import Shape from "./Shape";

class Frame extends Component {
  state = {
      x: 0,
      y: 0,
      dots: [],
      dotId: 1,
      stop: false
  };



  startDot = () => {
    this.setState({
        stop: false
    })
    const start = setInterval(()=>{
        if (this.state.stop === true) {
            clearInterval(start);
        } else if (this.state.stop === false) {
            this.makeDot()
        }
    }, 100)
  }

  stopDot = () => {
      this.setState({
          stop: true
      })
  }

  makeDot = () => {
      
    
    const randomX = Math.floor(Math.random() * (this.props.height-15));
    const randomY = Math.floor(Math.random() * (this.props.width-5));
    
    const dot = {
        x: randomX,
        y: randomY,
        id: this.state.dotId +1
    }
    console.log("dot", dot);
    let tempDots = this.state.dots;
    tempDots.push(dot);
    this.setState({
        x: randomX,
        y: randomY,
        dots: tempDots
    })
    console.log("dots", this.state.dots);
    
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
          top={el.x}
          left={el.y}
          />
                )
            })}
          
            
        </FrameWrapper>
        <br/>
        <button onClick={this.startDot}>make</button>
        <button onClick={this.stopDot}>stop</button>
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
  background: ${(props) => props.propsColor || "#caf0f8"};
  position: relative;
  border: 10px solid grey;
  
`;

export const FlexWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const Water = styled.div`
height: 1px;
width: 100%;
background: blue;
position 
`;

export default Frame;