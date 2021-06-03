import React, { Component } from "react";
import styled from "styled-components";
import Installation from "./Installation";
import HelloWorld from "./HelloWorld";
import Comments from "./Comments";
import Variables from "./Variables";
import Numbers from "./Numbers";
import Strings from "./Strings";
import Arrays from "./Arrays";
import Conditionals from "./Conditionals";
import Loops from "./Loops";
import Functions from "./Functions";
  

class Main extends Component {
  

 
  render() {
    return (
      <MainWrapper>
        
        
        <h1 id="top">My PHP adventures</h1>
        <ul>
          <a href="#installation">
            <li>Installation</li>
          </a>
          <a href="#helloworld">
            <li>Hello World</li>
          </a>
          <li><a href="#comments">Comments</a><span className="subLinks"> (single line, multiline)</span></li>
          
            <li><a href="#variables">Variables</a><span className="subLinks"> (naming, printing, contacenation, printing boolean, printing null, print variable type, print whole variable, check variable, check if variable is defined)</span></li>
          
            <li><a href="#constants">Constants</a><span className="subLinks"> (define, build-in constants)</span></li>
            <li><a href="#numbers">Numbers</a><span className="subLinks"> (declaring, arythmetic operations, assigments by math operators, increment operator, decrement operator, number checking functions, conversion, number functions, formating, more)</span></li>
          
            <li><a href="#strings">Strings</a><span className="subLinks"> (creating, concatenation, string functions, multiline text, line breaks, long strings, reserved html tags)</span></li>
          <li><a href="#arrays">Arrays</a><span className="subLinks"> (create, print, get el, set el, check is there specific index, append el, print length, add el at end, remove el at end, add el at beginning, remove el at beginning, string into array, array into string, search el index in array, merge, associative arrays, acces el by key, set el by key, null coalescing assignment operator, check if array has specific key, print keys, print values, sort associative arrays by keys / values, two dimensional arrays)</span></li>
          <li><a href="#conditionals">Conditionals</a><span className="subLinks"> (if, if-else, == / ===, if AND, if OR, ternary operator, short ternary, null coalescing operator, switch)</span></li>
          <li><a href="#loops">Loops</a><span className="subLinks"> (while, do while, for, foreach, iterate over associative array)</span></li>
          <li><a href="#functions">Functions</a><span className="subLinks"> (create function, function with arguments, two arguments summing function, all arguments summing function, arrow function, arrow_reduce)</span></li>
        </ul>

        <Installation />
        <HelloWorld />
        <Comments />
        <Variables />
        <Numbers />
        <Strings />
        <Arrays />
        <Conditionals />
        <Loops />
        <Functions />

        
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
  height: 100%;

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
