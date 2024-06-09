// There are synchronous and asynchronous programming.
// Asynchronous actions are those actions which if i initiate now, wo actions hojayega complete,
// kaile huncha we don't need to worry but hojayega, once you initiate the action.
// One best example of asynchronous programming is the setTimeout function.
// Tyo function euta certain specified time pachi matra execute huncha, tara tyo time samma ,
// program flow kurera basne ta haina, aru kam bhairakhcha ani tyo setTimeout ko time bhayesi,
// tyo function execute huncha. So JS is asynchronous because JS is single threaded.

// This means that it has a single execution thread, and it processes one task at a time in
// a synchronous manner. When a JavaScript program runs, it typically runs on a single
// thread of execution. This single-threaded nature of JavaScript is due to its design as
// a language for web browsers. JavaScript was originally developed to add interactivity to
// web pages, and it runs in the browser's main thread. This ensures that JavaScript doesn't
// block the rendering of the web page, and it can respond to user interactions without
// causing the page to freeze.
// However, JavaScript also provides mechanisms for asynchronous programming.

// It can handle asynchronous operations, such as making network requests, reading files,
// or waiting for user input, without blocking the main thread. This is achieved through
// concepts like callbacks, Promises, and async/await.
// For example, when you use setTimeout, it schedules a callback to be executed after
// a certain amount of time, allowing the main thread to continue executing other code
// in the meantime.

// Synchronous actions chai testo actions jun serially chalcha one after another.

//Basically callback function bhaneko esto kura ho ki,

// euta function ko argument ma hami arko function lai as a parameter pass
// garaidincham
// ani tyo parameter ko rup ma pass gariyeko function lai
// main function bhitra ni call garincha,
// Callback function is basically used for doing asynchronous programming.
// A main function that does something asynchhronously should Have
// a callback function argument(parameter),
// esari the main function will run when it has to run.
// This is a way of doing asynchronous programming by using callback function.
// Pachi hamile asynchronous programming async await promises bata ni garcham and that is
// real power of javascript, basic js ta jasle ni garcha, this'll make you an advanced js developer.

//simple example of a callback function
//This code will load the script from the specified URL
//and call the callback function when the script has finished loading.

function loadScript(src, callback) {
  console.log("Hello, what's up guys?");
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loading script with src: " + src);
    callback(src);
  };
  document.body.appendChild(script);
}

loadScript("https://www.sxc.edu.np", callback);

console.log(
  "I'll execute until the script loads hehe, this is asynchronous programming"
);

function callback(src) {
  console.log("Script loaded: " + src);
}

//explanation
// The code defines a JavaScript function called loadScript, which is designed to dynamically
// load an external script and then execute a callback function when that script has
// finished loading. Here's a step-by-step explanation of the code:

// function loadScript(src, callback):
// This is a function declaration with two parameters. src is the URL of the external script
// to be loaded, and callback is the function that will be called once the script has
// loaded.

// console.log("Hello, what's up guys?");:
// This line prints a message to the console when the loadScript function is called.
// Yo chai script run huna agadi nai print huncha hai

// let script = document.createElement('script');:
// This creates an HTML script element.
//The script element is appended to the document.body to make sure it's part of the
//html document and can be executed.

// script.src = src;:
// It sets the src attribute of the script element to the URL passed as an argument to the
// function.

// script.onload = callback(src);:
// Maile paila esto garethe.
// This is where the error occurs.
// The intention is to set the onload event handler of the script element to call the
// callback function when the script has loaded.
// However, the issue is that you are immediately invoking callback(src) instead of assigning
// a function to script.onload. This means that callback will be called immediately,
// not when the script has loaded.

// In JavaScript, when you set an event handler like onload,
// it expects a function reference. The purpose of this event handler is to specify the
// function that should be executed when the event occurs, in this case, when the external
// script has finished loading. So, when you write script.onload = callback(src);,
// it immediately calls the callback function and assigns its return value to script.onload,
// which is not what you want.

// When you write script.onload = callback(src);,
// it means "execute callback(src) immediately and assign its return value to script.onload."
// This is not what you intend, as you want to call callback after the script has loaded.

// When you define script.onload as an anonymous function like this:

// script.onload = function () {
//     console.log("Loaded script with src: " + src);
//     callback(src);
// };

// An anonymous function in JavaScript is a function that is defined without a name.
// It's also referred to as a "function expression." Unlike regular functions,
// which are defined with a name.Anonymous functions are commonly used when you need
// to define a function on the fly, especially as arguments to other functions, in callback
// functions, or for creating closures. They are handy in situations where you don't need
// to reuse the function elsewhere in your code. Additionally, they are often used with
// event handlers, as you've seen in the earlier example when defining an onload event
// handler for an HTML element.

//here: loadScript("https://www.sxc.edu.np", callback);
//The loadScript function is called with a valid URL ("https://www.sxc.edu.np") and the
//callback function as the second argument.
