import React, { Component } from "react";

class Loops extends Component {
  render() {
    return (
      <div>
        <h2 id="loops">Loops</h2>
        <p>while loop</p>
        <code>
          $counter = 0;
          <br />
          while ($counter &#60; 10) &#123;
          <br />
          <span className="tab">echo $counter.'&#60; br/&#62;';</span>
          <br />
          <span className="tab">$counter++;</span> <br />
          &#125; // will print numbers form 0 to 9 <br />
          <br />
          $counter = 0;
          <br />
          while ($counter &#60; 10) &#123;
          <br />
          <span className="tab">echo $counter.'&#60; br/&#62;';</span>
          <br />
          <span className="tab">if ($counter === 5) &#123;</span>
          <br />
          <span className="tab">
            <span className="tab">break</span>
          </span>
          <br />
          <span className="tab">&#125;</span>
          <br />
          <span className="tab">$counter++;</span> <br />
          &#125; // will print numbers form 0 to 5 bacouse of break;
        </code>
        <p>do while loop;</p>
        <code>
          $counter = 5;
          <br />
          do &#123;
          <br />
          <span className="tab"> echo $counter.'&#60; br/&#62;';</span>
          <br />
          <span className="tab">$counter++;</span>
          <br />
          &#125; while ($counter &#60; 10); <br/>// will print numbers from 5 to 9 (
as long as it meets the condition ($counter &#60; 10) )
          <br />
        </code>
        <p>for loop:</p>
        <code>
        for ($i = 0; $i &#60; 10; $i++) &#123;<br/>

    <span className="tab">echo $i.'&#60; br/&#62;'</span>;<br/>
    &#125;<br/>
    // will print $i form 0 to 9 as long as it meets the condition ($i &#60; 10)

        </code>
        <p>foreach loop:</p>
        <code>
        $fruits = ['banana', 'apple', 'orange']; <br/>
        foreach($fruits as $fruit) &#123;
<br/>
        <span className="tab">echo $fruit.", ";</span><br/>
        &#125;
                <br/>
                // will take each element of $fruits as $fruit and print it --&#62;
 banana, apple, orange,
        </code>
      </div>
    );
  }
}

export default Loops;
