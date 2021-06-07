import React, { Component } from "react";

class Functions extends Component {
  render() {
    return (
      <div>
        <h2 id="functions">Functions</h2>
        <p>Create function:</p>
        <code>
          function hello() &#123; <br />
          <span className="tab">echo "Hello from function"; </span>
          <br />
          &#125; <br />
          hello(); <br />
          / function will print "Hello from function"
        </code>
        <p>Function with argument:</p>
        <code>
          function bye($name) &#123; <br />
          <span className="tab">echo "Bye $name";</span>
          <br />
          &#125; <br />
          bye("Matt");
          <br />
          / function will print passed argument ($name) <br />
          <br />
          function byeBye($name) &#123; <br />
          <span className="tab"> return "Bye $name";</span>
          <br />
          &#125; <br />
          byBye("Tom"); <br/>/ function will <em>return</em> "Bye Tom"
        </code>
        <p>Create addTwo function:</p>
        <code>function addTwo($a, $b) &#123; <br />
          <span className="tab"> return $a + $b;</span>
          <br />
          &#125; <br />
          addTwo(4, 5); <br/>/ function will <em>return</em> 9 </code>
          <p>Create function to sum all passed numbers:</p>
          <code>
            function sumAll(...$nums) &#123; <br />
            <span className="tab">$total = 0;</span><br/>

            <span className="tab">foreach ($nums as $n) &#123;</span> <br />
            <span className="tab"><span className="tab">$total += $n;
             </span></span><br />
             <span className="tab">&#125; </span><br/>

            <span className="tab">return $total;</span><br/>
            &#125; <br />
sumAll(1, 2, 3, 4, 5, 6);<br/><br/>
/ Function will return 21. In first line using  <em>splat operator</em> creating array $nums. foreach takes each argument of $nums as $n and add it's value to $total, then function return sum of all.
          </code>
          <p>Arrow function:</p>
          <code>
            function sum(...$nums) &#123; <br />
               <span className="tab"> return array_reduce($nums, fn($carry, $n) =&#62; $carry + $n);</span><br/>
               &#125; <br />
            echo sum(1, 2, 3, 4); <br/><br/>
            / function will iterate over all passed elements and call given function (fn) for every element. In first iteration function will take first element as $carry and second element as $n and return (=&#62;) sum. In next iterations function takes sum as $carry and next element as $n and return sum (10 at last iteration).
          </code><br/><br/>
          <a href="#top">hop to top <span className="rotate90">&#171;</span></a>
      </div>
    );
  }
}

export default Functions;
