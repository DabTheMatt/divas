import React, { Component } from 'react';
import styled from "styled-components";
import Installation from "./Installation";


class Main extends Component {
    render() {
        return (
            <MainWrapper>
            <h1>
                My PHP adventures 
                </h1>
                <ListOfContentWrapper>
                    <p>installation</p>
                    <p>hello world!</p>
                </ListOfContentWrapper>
                <Installation/>
                
           
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