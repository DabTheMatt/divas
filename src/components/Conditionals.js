import React, { Component } from "react";

class Conditionals extends Component {
  render() {
    return (
      <div>
        <h2 id="conditionals">Conditionals</h2>
        <p>if:</p>
        <code>
          if ($age === 18) &#123;
          <br />
          echo "1";
          <br />
          &#125; // if age is equal 18, print 1
          <br />
          <br />
          if ($age === 18) echo "1"; // another way to do the same
        </code>
        <p>if-else:</p>
        <code>
          if ($age > 18) &#123; <br />
          echo "1"; <br />
          &#125; else &#123;
          <br />
          echo "2";
          <br />
          &#125; // if age is greater then 18 print 1 in another case print 2
        </code>
        <p>Difference between === and ==:</p>
        <code>
          $age = 20;
          <br />
          <br />
          if ($age == 20); <br />
          if ($age == "20"); // both are true bacouse i am comparing only values
          (20)
          <br />
          <br />
          if ($age === "20"); // will be false bacouse i am comparing values and
          type of $age
          <br />
          <br />
          $age == 20; // true;
          <br />
          $age == '20'; // true;
          <br />
          $age === 20; // true;
          <br />
          $age === '20'; // false;
          <br />
        </code>
        <p>if AND:</p>
        <code>
          $age = 20;
          <br />
          $salary = 500;
          <br />
          <br />
          if ($age > 20 && $salary === 500) &#123;
          <br />
          echo "do something";
          <br />
          &#125; // nothing will hepend bacouse only one condition is true
        </code>
        <p>if OR:</p>
        <code>
          if ($age > 20 || $salary === 500) &#123;
          <br />
          echo "do something";
          <br />
          &#125; // "do something" will be preinted bacouse $age OR $salary are
          true
        </code>
        <p>
            Ternary if:
        </p>
        <code>
            echo $age &#60;
 21 ? 'young' : 'not so young'; // will print 'young' bacouse age is less than 21 ($age = 20)
        </code>
        <p>Short ternary:</p>
        <code>
            $myAge = $age ?: 18; // if $age is not exist will create $myAge variable with value 18
        </code>
        <p>Null coalescing operator:</p>
        <code>
            $myName = isset($name) ? $name : 'Matt'; // if there is no $name variable (or it's value is equal 0) create variable $myName with value 'Matt';<br/>
            <br/>
            $myAge = $age ?? 130; // will create $myAge variable with value 130 if there is no $age
        </code>
        <p>Switch:</p>
        <code>
            $userRole = 'admin';<br/>
        <br/>
            switch ($userRole) &#123;<br/>

            case 'admin':<br/>
                <span className="tab">echo 'admin';</span><br/>
                <span className="tab">break;</span><br/>
            case 'editor':<br/>
            <span className="tab">echo 'editor';</span><br/>
            <span className="tab">break;</span><br/>
            default:<br/>
            <span className="tab">echo 'invalid role';</span><br/>
                &#125; // case 'admin' will be executed and 'admin' will be printed, bacouse $userRole = 'admin'. If $userRole = 'webadmin', 'invalid user' will be printed bacouse there is no match for any case.

        </code>
      </div>
    );
  }
}

export default Conditionals;
