import React, { Component } from "react";
import styled from "styled-components";
import tv from "../assets/tv.png"
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
  state = {
    showClassVar: "",
    showVar: true,
    showTextVar: "hide",
    showClassCom: "",
    showCom: true,
    showTextCom: "hide",
    dupaVar: "",
    dupaCom: "",
    crt: false,
    crtClass: "",
    btn: "OFF",
    bcg: "#2dc653",
  }

  handleCRT = () => {
    if (this.state.crt) {
      this.setState({
        crt: !this.state.crt,
        crtClass: "",
        btn: "OFF",
        bcg: "#2dff53",
      });
    } else {
      this.setState({
        crt: !this.state.crt,
        crtClass: "flick",
        btn: "ON",
        bcg: "#2dc653",
      });
    }

    console.log("class", this.state.crtClass);
  };

 showClassVar = () => {
    if (this.state.showVar) {
   this.setState({
     showTextVar: "show",
     showVar: false,
     showClassVar: "hide"
   })
  } else {
    this.setState({
      showTextVar: "hide",
      showVar: true,
      showClassVar: "show"
    })
  }

 }

 showClassCom = () => {
  if (this.state.showCom) {
 this.setState({
   showTextCom: "show",
   showCom: false,
   showClassCom: "hide"
 })
} else {
  this.setState({
    showTextCom: "hide",
    showCom: true,
    showClassCom: "show"
  })
}

}



  render() {
    return (
      <MainWrapper>
        <div className="frame">
          <div className="insideFrame">
        <div className={this.state.crtClass}>
      <div className="screenWrapper">
      <div className="crtWrapper">
          <button className="crtBtn"
            onClick={this.handleCRT}
            style={{ background: this.state.bcg }}
          >
            Old CRT mode {this.state.btn}
          </button>
</div>
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
        <Comments 
        handleShow={this.showClass}
        show={this.state.showText}
        showClass={this.state.showClass}
        
        />
        <Variables 
        
        handleShow={this.showClassVar}
        show={this.state.showTextVar}
        showClass={this.state.showClassVar}

        
        />
        <Numbers />
        <Strings />
        <Arrays />
        <Conditionals />
        <Loops />
        <Functions />
        </div>
        </div>
        </div>
        </div>
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
  
  
  height: 100vh;
  width: 100%;
  margin: 0 auto;
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
