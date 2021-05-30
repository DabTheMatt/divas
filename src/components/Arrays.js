import React, { Component } from "react";

class Arrays extends Component {
  render() {
    return (
      <div>
        <h2>Arrays</h2>
        <p>Creating Arrays:</p>
        <code>
          $fruits = ['apple','pear', 'orange']; <br />
          $colors = array('red', 'brown', 'black');
          <br />
        </code>
        <p>Print the whole array:</p>
        <code>
          var_dump($fruits);
          <br />
          <br />
          echo &#60;pre&#62;;
          <br />
          var_dump($colors);
          <br />
          echo &#60;/pre&#62;; // will display array in more readable format
          because of &#60;pre&#62; tag
        </code>
        <p>
            Get element by index:
        </p>
        <code>
        $colors = array('red', 'brown', 'black');
          <br />
        echo $colors[1]; // brown
        
        </code>
        <p>Set element by index:</p>
        <code>
        $colors[1] = "pink";<br/>
        echo $colors[1]; // pink
        </code>
        <p>Check if array has element at specifc index:</p>
        <code>
            isset($fruits[2]); // true
        </code>
        <p>Append element:</p>
        <code>
            $fruits[] = "kiwi"; // will add kiwi at end of $fruits
        </code>
      </div>
    );
  }
}

export default Arrays;
