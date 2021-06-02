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

    <span className="tab">echo $i.''</span>;<br/>
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
 banana, apple, orange,<br/><br/>

 foreach($fruits as $index => $fruit) &#123;
<br/>
    <span className="tab">echo $index." ".$fruit.'&#60; br/&#62;'</span>;<br/>
    &#125;
<br/>
// will print index of each element of $fruits with element --&#62; <br/>0 banana<br/>
1 apple<br/>
2 orange
        </code>
        <p>Iterate over associative array</p>
        <code>
        $book = [<br/>
            <span className="tab">'title' =&#62;
            'Phonebook',</span><br/>
    <span className="tab">'pages' =&#62;
 195,</span><br/>
 <span className="tab">'names' =&#62;
 ['Alan', 'Barnaba', 'Cynthia']</span><br/>
];<br/><br/>

foreach ($book as $key =&#62;
 $value) &#123;
<br/>
<span className="tab">if (is_array($value)) &#123;</span>
    <br/>
    <span className="tab"><span className="tab">echo $key.': '. implode(", ", $value).'&#60; br/&#62;';</span></span><br/>
        <span className="tab">&#125; else &#123;</span>
    <br/>
    <span className="tab">echo $key.': '.$value.'&#60; br/&#62;';</span><br/>
        <span className="tab">&#125;</span>
        <br/>
        &#125;
        <br/>
        // will iterate over $book printing pairs of $key $value and $key and array $values if value of $key is an array
        </code>
      </div>
    );
  }
}

export default Loops;
