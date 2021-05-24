import React, { Component } from 'react';
import styled from "styled-components";
import useSound from 'use-sound';
import typeSound from "../assets/type.wav";

class Kajak extends Component {
    state = {
        word: "",
        wordArray: [],
        newWord: "",
        revWord: ""
    }

    playAudio = () => {
        new Audio (typeSound).play();
    }

    handleChange = (event) => {
        this.playAudio();
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        this.setState({
            
            
        })
        let arrayWord = Array.from(this.state.word);
        arrayWord = arrayWord.reverse();
        console.log(arrayWord);
        let revWord = arrayWord.join("");
        let newWord = this.state.word+revWord
        
        this.setState({
            word: value,
            newWord: newWord,
            revWord: revWord
        })

        

    }

   

    render() {
        return (
            
            <KajakWrapper>
                
                <h1>{this.state.word.length >= 1 ? this.state.word+this.state.revWord : " "}
                    
                    <br/></h1>
                <input
                    name="word"
                    type="text"
                    value={this.state.word}
                    onChange = {this.handleChange}
                    autoFocus
                    placeholder="find palindrome"
                    />
                    <div className="wiki">
                <p>A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar. </p>
                </div>
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
color: #495057;
h1{
    font-size: 8rem;
    font-weight: 300;
    margin-top: -10rem;
}

input {
    font-size: 3rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid grey;
    width: auto;
    outline: none;
    text-transform: lowercase;
    background: #ede0d4;
    color: "#343a40";
    opacity: 0.7;
    font-family: 'Bitter', serif;
    font-weight: 300;
    ::placeholder {
        
        font-family: 'Bitter', serif;
        font-size: 2rem;
        font-weight: 300;
        color: #6c757d;
        opacity: 0.5;
    }
    
}
.wiki {
        text-align: center;
        width: 50vw;
        opacity: 1;
        height: 20vh;
        font-weight: 200;
        p {
            margin-top: 8rem;
        }
    }

`;

export default Kajak;