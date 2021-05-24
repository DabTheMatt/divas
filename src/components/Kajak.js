import React, { Component } from 'react';
import styled from "styled-components";

class Kajak extends Component {
    state = {
        word: "kajak",
        wordArray: [],
        newWord: ""
    }

    handleChange = (event) => {
        
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        this.setState({
            word: value,
            
        })
        let arrayWord = Array.from(this.state.word);
        arrayWord = arrayWord.reverse();
        console.log(arrayWord);
        let revWord = arrayWord.join("");
        let newWord = this.state.word+revWord
        
        this.setState({
            
            newWord: newWord
        })

    }

   

    render() {
        return (
            <KajakWrapper>
                <h1>{this.state.newWord}<br/></h1>
                <input
                    name="word"
                    type="text"
                    value={this.state.word}
                    onChange = {this.handleChange}
                    />
                
            </KajakWrapper>
        );
    }
}

export const KajakWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

h1{
    font-size: 10rem;
    font-weight: 200;
    margin-top: -10rem;
}

input {
    font-size: 3rem;
    text-align: center;
}

`;

export default Kajak;