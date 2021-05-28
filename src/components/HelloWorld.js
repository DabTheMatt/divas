import React, { Component } from 'react';
import styled from "styled-components";

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h2 id="hellowolrd">Hello world</h2>
                <p>First steps containning</p>
                <code>
                    
                    echo "Hello world";
                    
                    </code>
            </div>
        );
    }
}

export default HelloWorld;