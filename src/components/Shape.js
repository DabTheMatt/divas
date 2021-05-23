import React, { Component } from 'react';
import styled from "styled-components";
const random = Math.random()*100;

class Shape extends Component {
    



    render() {
        console.log(this.props.top);
        return (
            <div>
            <ShapeStyler
            top={this.props.top}
            left={this.props.left}
            >
                <div>

                </div>
            
            </ShapeStyler>
            
            </div>
        );
    }
}

export const ShapeStyler = styled.div`
background: white;
height: 5px;
width: 5px;
position: relative;
top: ${(props) => `${props.top}px` || "0px"};
left: ${(props) => `${props.left}px` || "0px"};
`;

export default Shape;