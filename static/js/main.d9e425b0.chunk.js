(this.webpackJsonpdivas=this.webpackJsonpdivas||[]).push([[0],{20:function(e,t,r){},21:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var c,s,n,i=r(1),j=r.n(i),a=r(12),b=r.n(a),l=(r(20),r(7)),o=r(2),d=r(3),h=r(5),O=r(4),x=(r(21),r(6)),u=r(0),p=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"installation",children:"Installation"}),Object(u.jsx)("p",{children:"Install XAMPP"}),Object(u.jsx)("p",{children:"Install PHP Intelephense by Ben Mewburn (for VSC)"}),Object(u.jsx)("p",{children:"run XAMMP and check localhost/dashboard for apache and localhost/myphpadmin for mysql (are they working?)"})]})}}]),r}(i.Component),m=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"hellowolrd",children:"Hello world"}),Object(u.jsx)("p",{children:"First steps containning"}),Object(u.jsx)("code",{children:'echo "Hello world";'})]})}}]),r}(i.Component),f=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"comments",children:"Comments"}),Object(u.jsxs)("code",{children:["// single line",Object(u.jsx)("br",{}),"# single line",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"/* ",Object(u.jsx)("br",{}),"multiline",Object(u.jsx)("br",{})," */",Object(u.jsx)("br",{})]})]})}}]),r}(i.Component),g=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"variables",children:"Variables"}),Object(u.jsx)("p",{children:"Variabels naming: $ then letter or underscore then ev. numbers"}),Object(u.jsxs)("code",{children:[Object(u.jsx)("ul",{children:"object types:"}),Object(u.jsx)("li",{children:'string - $name = "Matt"'}),Object(u.jsx)("li",{children:"integer - $age = 28"}),Object(u.jsx)("li",{children:"float/double - $height = 1.78"}),Object(u.jsx)("li",{children:"boolean - $isMale = true"}),Object(u.jsx)("li",{children:"null - $salary = null"}),Object(u.jsx)("li",{children:"array"}),Object(u.jsx)("li",{children:"object"}),Object(u.jsx)("li",{children:"resource"})]}),Object(u.jsx)("p",{children:"printing variable:"})," ",Object(u.jsx)("code",{children:"echo $name;"}),Object(u.jsx)("p",{children:"with contacenation (use . )"}),Object(u.jsx)("code",{children:"echo $name.(html tag np. br)"}),Object(u.jsx)("p",{children:'When printing boolean false is converted to empty string, true to "1"'}),Object(u.jsx)("p",{children:"When printing null, null is converted to empty string"}),Object(u.jsxs)("p",{children:["To print variable type, use ",Object(u.jsx)("i",{children:"gettype"})," function"]}),Object(u.jsx)("code",{children:"echo gettype($name)"}),Object(u.jsxs)("p",{children:["To print whole variable use ",Object(u.jsx)("i",{children:"var_dump"})," function"]}),Object(u.jsxs)("code",{children:["var_dump($age);",Object(u.jsx)("br",{}),"var_dump($name, $isMale, $sallary);"]}),Object(u.jsx)("p",{children:"To check variable:"}),Object(u.jsxs)("code",{children:["is_string($name); //true",Object(u.jsx)("br",{}),"is_int($name); //false ",Object(u.jsx)("br",{}),"is_bool($isMale); //true",Object(u.jsx)("br",{}),"is_double($height) //true;"]}),Object(u.jsx)("p",{children:"To check if variable is defined"}),Object(u.jsxs)("code",{children:["isset($name); //true ",Object(u.jsx)("br",{}),"isset($adress); //false"]}),Object(u.jsx)("h2",{id:"constants",children:"Constants"}),Object(u.jsx)("p",{children:"To define constans:"}),Object(u.jsxs)("code",{children:["define('Pi', 3.14); ",Object(u.jsx)("br",{}),"echo Pi;"]}),Object(u.jsx)("p",{children:"Using PHP built-in constants:"}),Object(u.jsxs)("code",{children:["echo SORT_ASC; ",Object(u.jsx)("br",{}),"echo PHP_INT_MAX;"]})]})}}]),r}(i.Component),y=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"numbers",children:"Numbers"}),Object(u.jsx)("p",{children:"Declaring numbers:"}),Object(u.jsxs)("code",{children:["$a = 5; ",Object(u.jsx)("br",{}),"$b = 6; ",Object(u.jsx)("br",{}),"$c = 5.2; ",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Arythmetic operations:"}),Object(u.jsxs)("code",{children:["$a * $b; ",Object(u.jsx)("br",{}),"$a % $c; ",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Assigment with math operators:"}),Object(u.jsxs)("code",{children:["$a += $b; // a = a + b",Object(u.jsx)("br",{}),"$b *= $c; // b = b * c"]}),Object(u.jsx)("p",{children:"Increment operator:"}),Object(u.jsxs)("code",{children:["$a++ // operation then incrementation ",Object(u.jsx)("br",{}),"++$a // incrementation then operation"]}),Object(u.jsx)("p",{children:"Decrement operator:"}),Object(u.jsxs)("code",{children:["$b-- // operation then decrementation ",Object(u.jsx)("br",{}),"--$b // dectrmentation then operation"]}),Object(u.jsx)("p",{children:"Numbers checking functions"}),Object(u.jsxs)("code",{children:["is_float(1.25) // true ",Object(u.jsx)("br",{}),"is_double(1.25) // true ",Object(u.jsx)("br",{}),"is_int(5) // true ",Object(u.jsx)("br",{}),'is_numeric("3.45") // true (because PHP cat recognize number in string) ',Object(u.jsx)("br",{}),'is_float("3g.45") // false (because 3g.45 is not a number',Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Conversion:"}),Object(u.jsxs)("code",{children:['$strNumber = "12.45"; ',Object(u.jsx)("br",{}),"$number = (float)$strNumber; // convert to float value of 12.45",Object(u.jsx)("br",{}),"$iNumber = (int)$strNumber; convert to integer value of 12",Object(u.jsx)("br",{}),"$bNumber = boolval($strNumber); // boolean value of $strNumber (true)",Object(u.jsx)("br",{}),"...floatval, intval, strval"]}),Object(u.jsx)("p",{children:"Number functions:"}),Object(u.jsxs)("code",{children:["abs(-15); // absolute value of 15; ",Object(u.jsx)("br",{}),"pow(2,3); // 2 to the 3 power (8); ",Object(u.jsx)("br",{}),"...sqrt, max, min, round, floor, ceil"]}),Object(u.jsx)("p",{children:"Formating numbers:"}),Object(u.jsxs)("code",{children:["$bigNumber = 123123123.123123; ",Object(u.jsx)("br",{}),"echo number_format($bigNumber, 3, '.', \"-\"); // 123-123-123.123 ",Object(u.jsx)("br",{})]}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://www.php.net/manual/en/ref.math.php",target:"blank",alt:"link to more math functions",children:"more math functions"})]})}}]),r}(i.Component),$=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"strings",children:"Strings"}),Object(u.jsx)("p",{children:"Creating strings:"}),Object(u.jsxs)("code",{children:['$name = "Matt"; ',Object(u.jsx)("br",{}),"$string1 = 'Hello $name'; // Hello $name (because of single quotation, in sq you can't concatenate variables)",Object(u.jsx)("br",{}),' $string2 = "Hello $name"; // Hello Matt (because of double quotation, in dq you can concatenate variables) ',Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"String concatenation:"}),Object(u.jsx)("code",{children:"echo 'Hello '.'Matt'; // Hello Matt"}),Object(u.jsx)("p",{children:"String functions:"}),Object(u.jsxs)("code",{children:['$string = "\xa0\xa0\xa0\xa0Hello Matt\xa0\xa0\xa0\xa0"; ',Object(u.jsx)("br",{}),'ltrim($string); // "Hello Matt\xa0\xa0\xa0\xa0"',Object(u.jsx)("br",{}),"str_replace('Matt', 'Tom', $string); // Hello Tom (\"what to replace\", \"with what\", where)",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"...rtrim, str_word_count, strrev, strtoupper, strtolower, ucfirst, lcfirst, ucwords, strpos, substr(where, start, length), str_ireplace(ignores case), trim, strlen"]}),Object(u.jsx)("p",{children:"Multiline text and line breaks:"}),Object(u.jsxs)("code",{children:['$longString = "Hello People',Object(u.jsx)("br",{}),"I am Matt,",Object(u.jsx)("br",{}),'I like pizza."; ',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo $longString; // Hello People I am Matt, I like pizza. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo nl2br($longString); // ",Object(u.jsx)("br",{}),"Hello People ",Object(u.jsx)("br",{}),"I am Matt ",Object(u.jsx)("br",{}),"I like pizza. ",Object(u.jsx)("br",{})," (because of nl2br - New Line To <BR>)"]}),Object(u.jsx)("p",{children:"Long string and reserved html tags:"}),Object(u.jsxs)("code",{children:['$longString2 = "Hello <b> People</b>,',Object(u.jsx)("br",{}),"I am <i>Matt</i>, ",Object(u.jsx)("br",{}),'I like pizza.";',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo $$longString2; // Hello ",Object(u.jsx)("b",{children:"People"}),", I am ",Object(u.jsx)("i",{children:"Matt"}),", I like pizza. (displays text with effective html tags) ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo htmlentities($longString2); // Hello <b>People</b>, I am <i>Matt</i>, I like pizza. (displays text with inactive html tags (shows them)) ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo nl2br(htmlentities($$longString2)) // will display text with inactive html tags changing new lines to <BR>",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"html_entity_decode('Hello&_#60;b&_#62; People&_#60;/b&_#62;'); // will decode html codes to: Hello ",Object(u.jsx)("b",{children:"People"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://www.php.net/manual/en/ref.strings.php",target:"blank",alt:"link to more math functions",children:"more math functions"})]})}}]),r}(i.Component),v=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"arrays",children:"Arrays"}),Object(u.jsx)("p",{children:"Creating Arrays:"}),Object(u.jsxs)("code",{children:["$fruits = ['apple','pear', 'orange']; ",Object(u.jsx)("br",{}),"$colors = array('red', 'brown', 'black');",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Print the whole array:"}),Object(u.jsxs)("code",{children:["var_dump($fruits);",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo <pre>;",Object(u.jsx)("br",{}),"var_dump($colors);",Object(u.jsx)("br",{}),"echo </pre>; // will display array in more readable format because of <pre> tag",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"print_r($fruits); // another way to print whole array"]}),Object(u.jsx)("p",{children:"Get element by index:"}),Object(u.jsxs)("code",{children:["$colors = array('red', 'brown', 'black');",Object(u.jsx)("br",{}),"echo $colors[1]; // brown"]}),Object(u.jsx)("p",{children:"Set element by index:"}),Object(u.jsxs)("code",{children:['$colors[1] = "pink";',Object(u.jsx)("br",{}),"echo $colors[1]; // pink"]}),Object(u.jsx)("p",{children:"Check if array has element at specifc index:"}),Object(u.jsx)("code",{children:"isset($fruits[2]); // true"}),Object(u.jsx)("p",{children:"Append element:"}),Object(u.jsx)("code",{children:'$fruits[] = "kiwi"; // will add kiwi at end of $fruits'}),Object(u.jsx)("p",{children:"Print the length of the array:"}),Object(u.jsx)("code",{children:"echo count($fruits); // 3"}),Object(u.jsx)("p",{children:"Add element at the end of the array:"}),Object(u.jsx)("code",{children:'array_push($fruits, "tomato");'}),Object(u.jsx)("p",{children:"Remove element from the end of the array:"}),Object(u.jsx)("code",{children:"array_pop($fruits);"}),Object(u.jsx)("p",{children:"Add element at the beginning of the array"}),Object(u.jsx)("code",{children:"array_unshift($fruits, 'grapes');"}),Object(u.jsx)("p",{children:"Remove element at the beginning of the array:"}),Object(u.jsx)("code",{children:"array_shift($fruits);"}),Object(u.jsx)("p",{children:"Split sthe string into an array:"}),Object(u.jsxs)("code",{children:['$string = "Tom, Matt, Peter";',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"echo <pre>;",Object(u.jsx)("br",{}),'var_dump(explode(",", $string));',Object(u.jsx)("br",{}),"echo </pre>; // ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"array(3) {",Object(u.jsx)("br",{}),"[0]=>",Object(u.jsx)("br",{}),'string(3) "Tom"',Object(u.jsx)("br",{}),"[1]=>",Object(u.jsx)("br",{}),'string(5) " Matt"',Object(u.jsx)("br",{}),"[2]=>",Object(u.jsx)("br",{}),'string(6) " Peter"',Object(u.jsx)("br",{}),"}"]}),Object(u.jsx)("p",{children:"Combine array into a string:"}),Object(u.jsx)("code",{children:'echo implode("#", $colors); // red#brown#pink'}),Object(u.jsx)("p",{children:"Check if element exist in the array:"}),Object(u.jsxs)("code",{children:["echo <pre>;",Object(u.jsx)("br",{}),'var_dump(in_array("tomato", $fruits));',Object(u.jsx)("br",{}),"echo </pre>; // bool(true)",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Search element index in the array:"}),Object(u.jsxs)("code",{children:["echo <pre>;",Object(u.jsx)("br",{}),'var_dump(array_search("tomato", $fruits));',Object(u.jsx)("br",{}),"echo </pre>; // int(3) (index of found element) ",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"Merge two arrays:"}),Object(u.jsxs)("code",{children:['$boys = ["tom", "peter", "matt"];',Object(u.jsx)("br",{}),'$girls = ["Agnes", "Karen", "Ann"];',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"$children = array_merge($boys, $girls);",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"$joined = [...$colors, ...$fruits]; // merge with use of spread operator"]}),Object(u.jsx)("p",{children:"Associative arrays:"}),Object(u.jsxs)("code",{children:["$person = [",Object(u.jsx)("br",{}),"'name' => \"Brad\", ",Object(u.jsx)("br",{}),"'surname' => \"Patison\",",Object(u.jsx)("br",{}),"'age' => 30,",Object(u.jsx)("br",{}),"'hobbies' => ['rpg', 'tennis']",Object(u.jsx)("br",{}),"]"]}),Object(u.jsx)("p",{children:"Acces element by key:"}),Object(u.jsxs)("code",{children:["$person['name'.'",Object(u.jsx)("br",{}),"';]"]}),Object(u.jsx)("p",{children:"Set element by key:"}),Object(u.jsx)("code",{children:"$person['car'] = 'Fiat';"}),Object(u.jsx)("p",{children:"Null coalescing assignment operator (what a name!):"}),Object(u.jsxs)("code",{children:["if (!isset($person['address'])) {",Object(u.jsx)("br",{}),"$person['address'] = 'unnknown';",Object(u.jsx)("br",{}),"} ",Object(u.jsx)("br",{}),'// If there is no address set then address is equal "unnknown". If $person address is set, take value, if not address value is equal "unnknown". ',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"$person['address'] ??= 'unnknown'; ",Object(u.jsx)("br",{}),"// another way to set default walue if there is no address set"]}),Object(u.jsx)("p",{children:"Check if array has specific key:"}),Object(u.jsx)("code",{children:"isset($person['address']);"}),Object(u.jsx)("p",{children:"Print the keys of the array:"}),Object(u.jsx)("code",{children:"array_keys($person);"}),Object(u.jsx)("p",{children:"Print the values of the array:"}),Object(u.jsx)("code",{children:"array_values($person);"}),Object(u.jsx)("p",{children:"Sorting associative arrays by keys / values:"}),Object(u.jsxs)("code",{children:["ksort($person); // will sort associative array alphabeticaly by keys",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"asort($person); // will sort associative array alphabeticaly by values"]}),Object(u.jsx)("p",{children:"Two dimensional arrays:"}),Object(u.jsxs)("code",{children:["$todos = [",Object(u.jsx)("br",{}),'["title" => "todo title 1", "completed" => true]',Object(u.jsx)("br",{}),'["title" => "todo title 2", "completed" => false]',Object(u.jsx)("br",{}),"]"]})]})}}]),r}(i.Component),w=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"conditionals",children:"Conditionals"}),Object(u.jsx)("p",{children:"if:"}),Object(u.jsxs)("code",{children:["if ($age === 18) {",Object(u.jsx)("br",{}),'echo "1";',Object(u.jsx)("br",{}),"} // if age is equal 18, print 1",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),'if ($age === 18) echo "1"; // another way to do the same']}),Object(u.jsx)("p",{children:"if-else:"}),Object(u.jsxs)("code",{children:["if ($age > 18) { ",Object(u.jsx)("br",{}),'echo "1"; ',Object(u.jsx)("br",{}),"} else {",Object(u.jsx)("br",{}),'echo "2";',Object(u.jsx)("br",{}),"} // if age is greater then 18 print 1 in another case print 2"]}),Object(u.jsx)("p",{children:"Difference between === and ==:"}),Object(u.jsxs)("codde",{children:["$age = 20;",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"if ($age == 20); ",Object(u.jsx)("br",{}),'if ($age == "20"); // both are true bacouse i am comparing only values (20)',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),'if ($age === "20"); // will be false bacouse i am comparing values and type of $age',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"$age == 20; // true;",Object(u.jsx)("br",{}),"$age == '20'; // true;",Object(u.jsx)("br",{}),"$age === 20; // true;",Object(u.jsx)("br",{}),"$age === '20'; // false;",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"if AND:"}),Object(u.jsxs)("code",{children:["$age = 20;",Object(u.jsx)("br",{}),"$salary = 500;",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"if ($age > 20 && $salary === 500) {",Object(u.jsx)("br",{}),'echo "do something";',Object(u.jsx)("br",{}),"} // nothing will hepend bacouse only one condition is true"]}),Object(u.jsx)("p",{children:"if OR:"}),Object(u.jsxs)("code",{children:["if ($age > 20 || $salary === 500) {",Object(u.jsx)("br",{}),'echo "do something";',Object(u.jsx)("br",{}),'} // "do something" will be preinted bacouse $age OR $salary are true']}),Object(u.jsx)("p",{children:"Ternary if:"}),Object(u.jsx)("code",{children:"echo $age < 21 ? 'young' : 'not so young'; // will print 'young' bacouse age is less than 21 ($age = 20)"}),Object(u.jsx)("p",{children:"Short ternary:"}),Object(u.jsx)("code",{children:"$myAge = $age ?: 18; // if $age is not exist will create $myAge variable with value 18"}),Object(u.jsx)("p",{children:"Null coalescing operator:"}),Object(u.jsxs)("code",{children:["$myName = isset($name) ? $name : 'Matt'; // if there is no $name variable (or it's value is equal 0) create variable $myName with value 'Matt';",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"$myAge = $age ?? 130; // will create $myAge variable with value 130 if there is no $age"]}),Object(u.jsx)("p",{children:"Switch:"}),Object(u.jsxs)("code",{children:["$userRole = 'admin';",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"switch ($userRole) {",Object(u.jsx)("br",{}),"case 'admin':",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"tab",children:"echo 'admin';"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"tab",children:"break;"}),Object(u.jsx)("br",{}),"case 'editor':",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"tab",children:"echo 'editor';"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"tab",children:"break;"}),Object(u.jsx)("br",{}),"default:",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"tab",children:"echo 'invalid role';"}),Object(u.jsx)("br",{}),"} // case 'admin' will be executed and 'admin' will be printed, bacouse $userRole = 'admin'. If $userRole = 'webadmin', 'invalid user' will be printed bacouse there is no match for any case."]})]})}}]),r}(i.Component),k=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"loops",children:"Loops"}),Object(u.jsx)("p",{})]})}}]),r}(i.Component),_=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsxs)(C,{children:[Object(u.jsx)("h1",{children:"My PHP adventures"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("a",{href:"#installation",children:Object(u.jsx)("li",{children:"Installation"})}),Object(u.jsx)("a",{href:"#helloworld",children:Object(u.jsx)("li",{children:"Hello World"})}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#comments",children:"Comments"}),Object(u.jsx)("span",{className:"subLinks",children:" (single line, multiline)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#variables",children:"Variables"}),Object(u.jsx)("span",{className:"subLinks",children:" (naming, printing, contacenation, printing boolean, printing null, print variable type, print whole variable, check variable, check if variable is defined)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#constants",children:"Constants"}),Object(u.jsx)("span",{className:"subLinks",children:" (define, build-in constants)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#numbers",children:"Numbers"}),Object(u.jsx)("span",{className:"subLinks",children:" (declaring, arythmetic operations, assigments by math operators, increment operator, decrement operator, number checking functions, conversion, number functions, formating, more)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#strings",children:"Strings"}),Object(u.jsx)("span",{className:"subLinks",children:" (creating, concatenation, string functions, multiline text, line breaks, long strings, reserved html tags)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#arrays",children:"Arrays"}),Object(u.jsx)("span",{className:"subLinks",children:" (create, print, get el, set el, check is there specific index, append el, print length, add el at end, remove el at end, add el at beginning, remove el at beginning, string into array, array into string, search el index in array, merge, associative arrays, acces el by key, set el by key, null coalescing assignment operator, check if array has specific key, print keys, print values, sort associative arrays by keys / values, two dimensional arrays)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#conditionals",children:"Conditionals"}),Object(u.jsx)("span",{className:"subLinks",children:" (if, if-else, == / ===, if AND, if OR, ternary operator, short ternary, null coalescing operator, switch)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#loops",children:"Loops"}),Object(u.jsx)("span",{className:"subLinks",children:" (if, if-else, == / ===, if AND, if OR, ternary operator, short ternary, null coalescing operator, switch)"})]})]}),Object(u.jsx)(p,{}),Object(u.jsx)(m,{}),Object(u.jsx)(f,{}),Object(u.jsx)(g,{}),Object(u.jsx)(y,{}),Object(u.jsx)($,{}),Object(u.jsx)(v,{}),Object(u.jsx)(w,{}),Object(u.jsx)(k,{})]})}}]),r}(i.Component),C=x.a.div(c||(c=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin: 0 auto;\n  width: 60%;\n  margin-bottom: 3rem;\n  height: 100%;\n\n  h1 {\n    text-align: center;\n  }\n\n  \n  \n"]))),N=(x.a.div(s||(s=Object(l.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  list-style: none;\n  margin: 0 auto;\n\n  p {\n    text-decoration: none;\n    font-size: 1.5rem;\n  }\n"]))),_),P=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(o.a)(this,r);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={crt:!1,crtClass:"",btn:"ON",bcg:"#2dc653"},e.handleCRT=function(){e.state.crt?e.setState({crt:!e.state.crt,crtClass:"",btn:"OFF",bcg:"#2dff53"}):e.setState({crt:!e.state.crt,crtClass:"flick",btn:"ON",bcg:"#2dc653"}),console.log("class",e.state.crtClass)},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsx)("inAppWrapper",{children:Object(u.jsxs)("div",{className:this.state.crtClass,children:[Object(u.jsxs)("button",{onClick:this.handleCRT,style:{background:this.state.bcg},children:["Old CRT mode ",this.state.btn]}),Object(u.jsx)(N,{})]})})}}]),r}(i.Component),M=(x.a.div(n||(n=Object(l.a)(["\nwidth: 60%;\nmargin: 0 auto;\nbutton {\n  padding: 2rem;\n  margin-left: 5rem;\n}\n\n"]))),P),A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,26)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),s(e),n(e),i(e)}))};b.a.render(Object(u.jsx)(j.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),A()}},[[25,1,2]]]);
//# sourceMappingURL=main.d9e425b0.chunk.js.map