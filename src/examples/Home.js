import React, { Component } from 'react';
import styled from "styled-components";

class Home extends Component {
    state = {
        leftWidth: "300",
        rightWidth: "300"
    }

    render() {
        return (
            <DivsWrapper>
                <DivLeft width={`${this.state.leftWidth}px`}/>
                <DivRight width={`${this.state.rightWidth}px`}>
                    <DivTop>

                    </DivTop>
                    <DivDown>

                    </DivDown>
                </DivRight>
            </DivsWrapper>
        );
    }
}

export const DivsWrapper = styled.div`
width: 600px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: stretch;
padding: 5rem;
flex-shrink: 2
`;

export const DivLeft = styled.div`
height: 600px;
width: ${props => props.width};
background: red;
border: 5px solid black;
resize: horizontal;
overflow: auto;
`;

export const DivTop = styled.div`
height: 50%;
width: ${props => props.width};
background: blue;
border: 5px solid black;
resize: vertical;
overflow: auto;
flex-grow: 2;
`;

export const DivDown = styled.div`
height: 100%;
width: 50%;
background: yellow;
border: 5px solid black;
resize: horizontal;
overflow: auto;

`;

export const DivRight = styled.div`
height: 600px;
width: ${props => props.width};
background: green;
border: 5px solid black;
flex-grow: 1;
display: flex;
flex-direction: column;

`;

export default Home;