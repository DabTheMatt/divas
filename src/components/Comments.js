import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <div>
                <h2>
                    Comments
                </h2>
                <p>// single line</p>
                <p># single line</p>
                <p>/* multiline */</p>
            </div>
        );
    }
}

export default Comments;