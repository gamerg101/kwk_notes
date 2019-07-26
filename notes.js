JavaScript Notes

Tool to check or javascript
- console.log("insert variable here")
Note: User never sees this, only a developers tool

Variable: dinfining an idea or quantity for the computer for it to remember
  *camelCase: first word is lowercase, first letter of second word is capitalized

Data Types:
1. "strings": must be put into quotes, represents text
  var harryStyles = "perfect human being";

2. numbers: do not use quotes, represents a quantity or amount
    var harryNumber = 1;
  a) < -- >: greater than or less than. ex 8>5 = true, 8<5 = false
  b) +, -, *, /: addition, subtraction, multiplication, and division
  c) ===: equal to
  d) <= or >=: less than or equal to and greater than or equal to
  e) %: remainder ex: 16%3 computer will return 1 because the remainder of 16/3 is 1

How to use number and string variables

var dogName = "Cricket";
var dogLeash = 1;
var poopBags = 2;
var waterBottles = 1;

var numItems = dogLeash + poopBags + waterBottles;

Summary: 1) broke down our problems into parts(variables) 2) defined our variables 3) used our variables to perform a task

Interpolation: integrating numerical values into strings using variables. MUST USE BACKTICKS (`).

console.log(`Take ${dogName} on a walk! don't forget to bring ${numItems} items!`)

Arrays: a list of strings and/or numbers. Represented by using square brackets([]). First item, assigned an index number of 0.
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

  console.log(arraySports[0]) --> soccer
  console.log(arraySports[4]) --> diving

  arraySports.length: .length tells computer to print the number of items in  an array

  arraySports.push("gymnastics") --> adds item to the end of an array

  arraySports.pop() --> removes the last item of an array

JQuery (element ascessors): library of shortcuts we download onto our html page. link goes on second to last line of our body, right above the javascript link

<script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>


Event handlers (event listeners): tells the computer to listen to a certain area(often times a button) for a click. on the click , perform a function(action).

Define specific area of HTML Page using JQuery($)
var dareButton = $('.darebutton')

area  listen for  action
dareButton.on('hover', showDare)

1. think of user experience. what do we want the user to see or do?
2. create an area or div in your html page to add elements
3. use Jquery to tell my js of my computer where to look(using $)
4. create a function or action to add the item to the html div
  a) .text:
  dareContainer.text(arrayDare[3])
  b) .append:
  dareContainer.append(`<img src="http://www.pethealthnetwork.com/sites/default/files/kitten-care162282356.png">`)
  dareContainer.append(`<h2>text<h2>`)
5.






conditionals
1. definr the codition (what you want to be true)
2. determine action if the user meets the condition
3. determine action if the user does not meet the condition
4. conditionals exist in functions


if(userNumber > 7)
  container.append(`<img src="">`)
