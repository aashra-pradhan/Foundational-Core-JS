In JavaScript, you can define functions using different syntax styles. 
Here are the primary ways to define functions in JavaScript:

1. Function Declaration:
This is the most common and traditional way to define functions. 
Function declarations are hoisted, which means they can be called before they are defined
in the code.

greet("Aashra");

function greet(name) {
  console.log("Hello, " + name);
}

2. Function Expression:
Function expressions define a function within an expression, such as a variable assignment. 
They are not hoisted, so you can only call them after they are defined.

const greet = function(name) {
  console.log("Hello, " + name);
};
greet("Aashra");

3. Arrow Function:
Arrow functions provide a more concise syntax for defining functions.
 They are often used for short, anonymous functions and have a different behavior
  regarding the this keyword.

const greet = (name) => {
  console.log("Hello, " + name);
};

4. Function Constructor:
This is not a recommended way to define functions.
 You can create functions using the Function constructor, but it is less common and 
 considered less safe due to potential security risks.

const greet = new Function("name", "console.log('Hello, ' + name);");

5. Method within an Object:
You can define functions as methods within objects.

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

6. Shorthand Method Syntax (ES6):
In modern JavaScript, you can define methods in objects using a shorthand syntax.

const person = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  }
};

7. Generator Function (ES6):
Generator functions use the function* syntax and allow for creating iterators.

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

NOTE: Each of these function syntax styles has its own use cases and behavior,
so you can choose the one that best suits your needs and coding style.
The most commonly used methods are function declarations, function expressions,
and arrow functions, depending on the context and requirements of your code.




