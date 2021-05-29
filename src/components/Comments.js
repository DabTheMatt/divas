import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <div>
                <h2 id="comments">
                    Comments
                </h2>
                <code>
                // single line<br/>
                # single line<br/><br/>
                /* <br/>multiline<br/> */<br/>
                </code>
            </div>
        );
    }
}

export default Comments;