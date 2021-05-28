import React, { Component } from 'react';

class Numbers extends Component {
    render() {
        return (
            <div>
                <h2 id="numbers">Numbers</h2>
                <p>Declaring numbers:</p>
                <code>
                    $a = 5; <br/>
                    $b = 6; <br/>
                    $c = 5.2; <br/>
                </code>
                <p>Arythmetic operations:</p>
                <code>
                $a * $b; <br/>
                $a % $c; <br/>
                </code>
                <p>Assigment with math operators:</p>
                <code>
                    $a += $b; // a = a + b<br/>
                    $b *= $c; // b = b * c
                </code>
                <p>Increment operator:</p>
                <code>
                    $a++ // operation then incrementation <br/>
                    ++$a // incrementation then operation
                </code>
                <p>Decrement operator:</p>
                <code>
                    $b-- // operation then decrementation <br/>
                    --$b // dectrmentation then operation
                </code>
                <p>Numbers checking functions</p>
                <code>
                    is_float(1.25) // true <br/>
                    is_double(1.25) // true <br/>
                    is_int(5) // true <br/>
                    is_numeric("3.45") // true (because PHP cat recognize number in string) <br/>
                    is_float("3g.45") // false (because 3g.45 is not a number<br/>
                </code>
                <p>Conversion:</p>
                <code>
                $strNumber = "12.45"; <br/>
                $number = (float)$strNumber; // convert to float value of 12.45<br/>
                $iNumber = (int)$strNumber; convert to integer value of 12<br/>
                $bNumber = boolval($strNumber); // boolean value of $strNumber (true)<br/>
                ...floatval, intval, strval
                </code>
                <p>Number functions:</p>
                <code>
                    abs(-15); // absolute value of 15 <br/>;
                    pow(2,3); // 2 to the 3 power (8) <br/>;
                    ...sqrt, max, min, round, floor, ceil
                </code>
                <p>Formating numbers:</p>
                <code>
                $bigNumber = 123123123.123123; <br/>
                echo number_format($bigNumber, 3, '.', "-"); // 123-123-123.123 <br/>
                </code>
                
                <a href="https://www.php.net/manual/en/ref.math.php" target="blank" alt="link to more math functions"><p>more math functions</p></a>
            </div>
        );
    }
}

export default Numbers;