import React, { Component } from 'react';

class Conditionals extends Component {
    render() {
        return (
            <div>
                <h2 id="conditionals">Conditionals</h2>
                <p>If:</p>
                <code>
                    if ($age === 18) &#123;<br/>

                        echo "1";<br/>
                        &#125;
                        // if age is equal 18, print 1
                        <br/>
                        <br/>
                        if ($age === 18) echo "1"; // another way to do the same
                    

                </code>
                <p>If-else:</p>
                <code>
                    if ($age > 18) &#123; <br/>

                        echo "1"; <br/>
                        &#125;
 else &#123;<br/>

                        echo "2";<br/>
                        &#125; // if age is greater then 18 print 1 in another case print 2

                </code>
            </div>
        );
    }
}

export default Conditionals;