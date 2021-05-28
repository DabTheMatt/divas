import React, { Component } from 'react';

class Variables extends Component {
    render() {
        return (
            <div>
                <h2 id="variables">
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
                <p>When printing boolean false is converted to empty string, true to "1"</p>
                <p>When printing null, null is converted to empty string</p>
                <p>To print variable type, use <i>gettype</i> function</p>
                <code>
                    echo gettype($name)
                </code>
                <p>To print whole variable use <i>var_dump</i> function</p>
                <code>
                    var_dump($age);<br/>
                    var_dump($name, $isMale, $sallary);
                </code>
                <p>To check variable:</p>
                <code>is_string($name); //true<br/>
                    is_int($name); //false <br/>
                    is_bool($isMale); //true<br/>
                    is_double($height) //true;
                </code>
                <p>To check if variable is defined</p>
                <code>
                    isset($name); //true <br/>
                    isset($adress); //false
                </code>
                <h2 id="constants">Constants</h2>
                <p>To define constans:</p>
                <code>
                    define('Pi', 3.14); <br/>
                    echo Pi;
                </code>
                <p>Using PHP built-in constants:</p>
                <code>
                    echo SORT_ASC; <br/>
                    echo PHP_INT_MAX;

                </code>
            </div>
        );
    }
}

export default Variables;