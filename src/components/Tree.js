import React from "react";
import styled from "styled-components";
import Frame from "./Frame";
import Form from "./Form";



class Tree extends React.Component {
    state = {
        height: 0,
        width: 0,
        color: ""
    }

    makeFrame = (height, width, color) => {
        this.setState({
            height: `${height}`,
            width: `${width}`,
            color: color
        })
        return (
            <div style={{height:`${height}px`, width:`${width}px`, bacground:"grey"}}></div>
        )
    }

    render() {
        return (
            <TreeWrapper>
                Hello from Tree
                <Form makeFrame={this.makeFrame}/>
                <Frame 
                height={this.state.height}
                width={this.state.width}
                color={this.state.color}
                />
            </TreeWrapper>
        );
    }
}

export const TreeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export default Tree;