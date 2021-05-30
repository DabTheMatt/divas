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
        <p>Get element by index:</p>
        <code>
          $colors = array('red', 'brown', 'black');
          <br />
          echo $colors[1]; // brown
        </code>
        <p>Set element by index:</p>
        <code>
          $colors[1] = "pink";
          <br />
          echo $colors[1]; // pink
        </code>
        <p>Check if array has element at specifc index:</p>
        <code>isset($fruits[2]); // true</code>
        <p>Append element:</p>
        <code>$fruits[] = "kiwi"; // will add kiwi at end of $fruits</code>
        <p>Print the length of the array:</p>
        <code>echo count($fruits); // 3</code>
        <p>Add element at the end of the array:</p>
        <code>array_push($fruits, "tomato");</code>
        <p>Remove element from the end of the array:</p>
        <code>array_pop($fruits);</code>
        <p>Add element at the beginning of the array</p>
        <code>array_unshift($fruits, 'grapes');</code>
        <p>Remove element at the beginning of the array:</p>
        <code>array_shift($fruits);</code>
        <p>Split sthe string into an array:</p>
        <code>
          $string = "Tom, Matt, Peter";
          <br />
          <br />
          echo &#60;pre&#62;;
          <br />
          var_dump(explode(",", $string));
          <br />
          echo &#60;/pre&#62;; // <br />
          <br />
          array(3) &#123;
          <br />
          [0]=&#62;
          <br />
          string(3) "Tom"
          <br />
          [1]=&#62;
          <br />
          string(5) " Matt"
          <br />
          [2]=&#62;
          <br />
          string(6) " Peter"
          <br />
          &#125;
        </code>
        <p>Combine array into a string:</p>
        <code>echo implode("#", $colors); // red#brown#pink</code>
        <p>Check if element exist in the array:</p>
        <code>
          echo &#60;pre&#62;;
          <br />
          var_dump(in_array("tomato", $fruits));
          <br />
          echo &#60;/pre&#62;; // bool(true)
          <br />
        </code>
        <p>Search element index in the array:</p>
        <code>
          echo &#60;pre&#62;;
          <br />
          var_dump(array_search("tomato", $fruits));
          <br />
          echo &#60;/pre&#62;; // int(3) (index of found element) <br />
        </code>
        <p>Merge two arrays:</p>
        <code>
          $boys = ["tom", "peter", "matt"];
          <br />
          $girls = ["Agnes", "Karen", "Ann"];
          <br />
          <br />
          $children = array_merge($boys, $girls);
          <br />
          <br />
         $joined = [...$colors, ...$fruits]; // merge with use of spread operator
        </code>
      </div>
    );
  }
}

export default Arrays;
