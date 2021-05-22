import React from 'react';
import styled from "styled-components";

class Form extends React.Component {
    state = {
        height: "",
        width: "",
        color: ""
    }

    handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        console.log(name);
        this.setState({
            [name]: value
        })
    }

    handleSend = (e) => {
        e.preventDefault();
        this.props.makeFrame(this.state.height, this.state.width, this.state.color)
    }

    render() {
        return (
            <FormWrapper>
                <label className="formTitle">give me your sizes</label>
                <label>height</label>
                <input
                name="height"
                type="number"
                value={this.state.height}
                
                onChange={this.handleChange}
                />
                <label>width</label>
                <input
                name="width"
                type="number"
                value={this.state.width}
                
                onChange={this.handleChange}
                />
                <label>color</label>
                <input
                name="color"
                type="text"
                value={this.state.color}
                
                onChange={this.handleChange}
                />
                <br/>
                <button onClick={(e)=>this.handleSend(e)}>Send</button>

            </FormWrapper>
        );
    }
}

export const FormWrapper = styled.form`
margin: 0 auto;
width: 200px;
display: flex;
flex-direction: column;
margin-bottom: 4rem;
label {
    text-align: right;
}
.formTitle {
    text-align: left;
}
button {
    width: 80%;
    align-self: center;
}
`;

export default Form;