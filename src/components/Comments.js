import React, { Component } from 'react';

class Comments extends Component {
    state = {
        show: true,
        showText: "hide",
        showClass: ""
    }

    handleShow = () => {
        this.props.handleShow();
        
    }

    dupa = (el) => {
        this.props.handleDupa(el)
    }

    render() {
        return (
            <div>
                <h2 id="comments">
                    Comments<span 
                    onClick={this.handleShowCom}
                    className="showBtn">{this.props.showCom}</span>
                </h2>
                <div className={this.props.showClassCom}
                onClick={()=>this.dupa("Com")}>
                <code>
                <span>&#47;&#47;</span> single line<br/>
                &#35; single line<br/><br/>
                &#47;* <br/>multiline<br/> *&#47;<br/>
                </code>
                </div>
            </div>
        );
    }
}

export default Comments;