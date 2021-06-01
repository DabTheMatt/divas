import React, { Component } from "react";

class Strings extends Component {
  render() {
    return (
      <div>
        <h2 id="strings">Strings</h2>
        <p>Creating strings:</p>
        <code>
          $name = "Matt"; <br />
          $string1 = 'Hello $name'; // Hello $name (because of single quotation,
          in sq you can't concatenate variables)
          <br /> $string2 = "Hello $name"; // Hello Matt (because of double
          quotation, in dq you can concatenate variables) <br />
        </code>
        <p>String concatenation:</p>
        <code>echo 'Hello '.'Matt'; // Hello Matt</code>
        <p>String functions:</p>
        <code>
          $string = "&nbsp;&nbsp;&nbsp;&nbsp;Hello
          Matt&nbsp;&nbsp;&nbsp;&nbsp;"; <br />
          ltrim($string); // "Hello Matt&nbsp;&nbsp;&nbsp;&nbsp;"
          <br />
          str_replace('Matt', 'Tom', $string); // Hello Tom ("what to replace",
          "with what", where)
          <br />
          <br />
          ...rtrim, str_word_count, strrev, strtoupper, strtolower, ucfirst,
          lcfirst, ucwords, strpos, substr(where, start, length),
          str_ireplace(ignores case), trim, strlen
        </code>
        <p>Multiline text and line breaks:</p>
        <code>
          $longString = "Hello People
          <br />
          I am Matt,
          <br />
          I like pizza."; <br />
          <br />
          echo $longString; // Hello People I am Matt, I like pizza. <br />
          <br />
          echo nl2br($longString); // <br />
          Hello People <br />
          I am Matt <br />
          I like pizza. <br /> (because of nl2br - New Line To &#60;BR&#62;)
        </code>
        <p>Long string and reserved html tags:</p>
        <code>
          $longString2 = "Hello &#60;b&#62; People&#60;/b&#62;, 
          <br />
          I am &#60;i&#62;Matt&#60;/i&#62;, <br />I like pizza.";
          <br/>
          <br />
          echo $$longString2; // Hello <b>People</b>, I am <i>Matt</i>, I like
          pizza. (displays text with effective html tags) <br /><br/>
          echo htmlentities($longString2); // Hello
          &#60;b&#62;People&#60;/b&#62;, I am &#60;i&#62;Matt&#60;/i&#62;, I
          like pizza. (displays text with inactive html tags (shows them)) <br/><br/>
          echo nl2br(htmlentities($$longString2)) // will display text with inactive html tags changing new lines to &#60;BR&#62;
          <br/>
          <br/>
          html_entity_decode('Hello&_#60;b&_#62; People&_#60;/b&_#62;'); // will decode html codes to: Hello <b>People</b>
        </code><br/><br/>
        <a href="https://www.php.net/manual/en/ref.strings.php" target="blank" alt="link to more math functions">more math functions</a>
      </div>
    );
  }
}

export default Strings;
