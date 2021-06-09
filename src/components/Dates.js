import React, { Component } from 'react';

class Dates extends Component {
   
    render() {

        
        return (
            <div>
                <h2 id="dates">Dates</h2>
                <p>Printing date:</p>
                <code>
                    echo date('d-m-Y H:i:s'); <br/>
                    / will print current date ( {new Date().toLocaleString() + ''} ) in day-month-Year Hours:minutes:seconds format
                </code>
                <p>Printing yesterday date:</p>
                <code>
                echo date('d-m-Y H:i:s', time() - 60 * 60 *24); <br/>
                / will print yesterday date (todays date minus 60*60*24 seconds) ( {new Date(new Date().setDate(new Date().getDate()-1)).toLocaleString() + ''} )
                </code>
                <p>Formating date:</p>
                <code>
                    You can find different date format here:
                <a className="lower" href="https://www.php.net/manual/en/function.date.php" target="_blank" > https://www.php.net/manual/en/function.date.php </a>
                </code>
                <p>Printing current timestamp:</p>
                <code>
                echo time(); <br/>
                / will print UNIX epoch, number of second elapsed since 01.01.1970 ({Date.now()})
                </code>
                <p>Parsing the date:</p>
                <code>
                    $parseDate = date_parse('2021-06-01 10:00:13');<br/>
                    / will create $parseDate array containing integers for year, month, day, hours, minutes and secends<br/>
                    <br/>
                    more info here: 
                    <a className="lower" href="https://www.php.net/manual/en/function.date-parse.php">https://www.php.net/manual/en/function.date-parse.php</a>
                </code>
                <p>Parsing the date from specific formats:</p>
                <code>
                    $dataString = 'January 5 2021 12;12:14';
                    $parsedDate = date_parse_from_format('F j Y H:i:s', $dataString);<br/>
                    / will create $parsedDate array containing integers for year, month, day, hours, minutes and secends
                    <br/><br/>
                    more info here: 
                    <a className="lower" href="https://www.php.net/manual/en/function.date-parse-from-format.php">https://www.php.net/manual/en/function.date-parse-from-format.php</a>
                </code>
            </div>
        );
    }
}

export default Dates;