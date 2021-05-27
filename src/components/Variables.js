import React, { Component } from 'react';

class Variables extends Component {
    render() {
        return (
            <div>
                <h2>
                    Variables
                </h2>
                <p>Variabels naming: $ then letter or underscore then ev. numbers</p>
                <ul>object types:</ul>
                <li>string - $name = "Matt"</li>
                <li>integer - $age = 28</li>
                <li>float/double - $height = 1.78</li>
                <li>boolean - $isMale = true</li>
                <li>null - $salary = null</li>
                <li>array</li>
                <li>object</li>
                <li>resource</li>
                <p>printing variable:</p> <code>echo $name;</code>
                <p>with contacenation (use . )</p><code>echo $name.(html tag np. br)</code>
            </div>
        );
    }
}

export default Variables;