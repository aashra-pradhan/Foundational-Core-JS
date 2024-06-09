// Promise in JS is basically a kasam(promise) of code execution.
// Promise solves the callback hell problem.

//Eg. when you order a cake, the cakebaker has promised you to give you the cake,
// you don't stop all your work and look at the cake
// similarly, when a code is promised to be executed, tesko time bhayepachi tyo
// aafai execute huncha, we don't have to stop all other tasks and tesmai adkera basnu
// pardaina. A promise either is resolved or rejected, j bhaye ni the subscriber will be
// notified.
//eg>: order gareko cake deliver huna sakena bhane ni notify garincha,
//similarly with promises.

//way of creating a promise
//here a function is passed as a parameter to the "promise" object and
// resolve and reject are two parameters(callbacks) to the function provided by
//the js engine automatically.
//We create a new Promise using the Promise constructor.
//nside the constructor, we provide a function with two parameters,
//resolve and reject. These parameters are callback functions you call to indicate the
//outcome of the asynchronous operation. Only one callback is called
//either resolve or reject ani yei euta parameter pass huncha tyo promise constructor ma pathaiyeko
//function(as a parameter) ma, tyo pass bhayeko parameter ko value js le afai diydincha,
//ani arko ko value null pass huncha, ani the promise is understood to be either resolved or rejected.

//Inside the Promise constructor function, you perform your asynchronous operation.
// If the operation is successful, you call resolve(result) with the result value.
//If an error occurs, you call reject(error) with an error object.

//the promise object returned by the new Promise constructor has the following properties:
//1.state(initially pending, pachi resolved ki rejeceted huncha)
// 2.result(initially undefined, resolve ya reject bhayepachi kun value ma resolve or
//tyo vallue esma rakhna milcha,reject bhayeko ho bhane error dinncha instead of value)
// eg/: resolve(56); eta aba state is resolved ani result is 56
// 56 ko satta yaha string value rakhdida ni huncha, boolean, array j rakhda ni huncha, mero marji

//After creating the Promise, you can attach .then() and .catch() methods to it.
//These methods are used to specify what should happen when the Promise is resolved
//(fulfilled) or rejected. This is basically handling the promise after it's resolved
//or rejected.

//.then() is called when the Promise is resolved, and you can access the result inside
// its callback function.
//.catch() is called when the Promise is rejected,
// and you can handle errors inside its callback function.

//parameters ma resolve, reject ni they are callback functions
let promise = new Promise(function (resolve, reject) {
  console.log("I am an alert in promise");
  resolve(56);
});

console.log("1. hello");

setTimeout(function () {
  console.log("2. hello in 2 seconds");
}, 2000);

console.log("3. My name is John");
console.log(promise);
//aba eta promise kun value le resolve/reject bhayeko ni print huncha
//tara we can't do promise.state, promise.result, that will shhow undefimed,
//browser console ma promise matra print garyo bhane chai dekhaucha,
//yei folder ma ss cha euta tyo hera(promise in browser console)

//aba output heryo bhane paila 1 executes, then 3 then 2, serialy hunna because js is
// asynchronous in nature, setTimeout is asynchronous in natuure, setTimeout le 2000
// miliseconds pachi matra tyo function execute garcha.
// basic syntax of setTimeout : setTimeout(function, delay);

// JavaScript is single-threaded, and setTimeout schedules a callback to be
// executed asynchronously after the specified delay. This means that other code can
// continue executing while waiting for the setTimeout to trigger. If you need to perform
//  multiple timed tasks in a specific order or with precise timing, you may need to use
// setTimeout in combination with other techniques, such as using Promises or async/await.

//note
//alert(in nodejs environment) displays it in console,
// ani browser environment ma chai alertbox ma display garcha; we know ni alert lekhe
// ni window.alert lekhe ni kam garcha, 3rdsem ma padheko thyam ta

//Realtime applicaton of promises:
// Task 1, 2 , 3 is done parallelly/asynchronously alongside rest of the code ni hai,
// main thread block garera
//program ta rokirakhdaina while task 1,2,3 is getting done ni hai
//1. Fetch google.com homepage
//2.Fetch data from the data api
//3. Fetch pictures from the server
//Rest of the code

//using arrow function
//so basic tippani is, promise bhitra bhayeko kura, tyo background ma/asynchronously
// execute bhairakhcha, tala ko aru kam lai rokdaina, main thread lai block gardaina
//ani execute bhayesi notify garcha .then ra .catch method ko sahayata le.
//so promise iis another waay of doing asynchronous tasks, one way was using callback functions

console.log("hello");

let p1 = new Promise((resolve, reject) => {
  console.log("Promise reject case");
  setTimeout(() => {
    reject(new Error("I am an error"));
    //this is the syntax to throw an error in js, custom error bhanum na.
    //Basically naya object banako ho Error class ko.
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise resolve case");
  setTimeout(() => {
    resolve("Resolved");
    // console.log("Promise actually resolved");
  }, 5000);
});

console.log(p1, p2);
//aba p1 ra p2 ko kura 10 seconds pachi display hune haina,
// duitai 5 second pachi nai huncha,
// euta code ma jati ota nai promise bhaye ni(eg.50) all are fired at once and work parallelly
// ani fulfil bbhaye pachi notify garcha


//then and catch
//p2 promise resolve bhayesi yo then method ko kura execute huncha
//resolve bhayeko value is passed as parameter to then method
p2.then((value)=>{
    console.log("value");
})

//p1 reject bhairacha so hamile error catch gareko ani promise reject bhayesi catch function
//bhitra ko kura huncha
//j error ho tyo catch function lai pass garincha(mathi ko eg. ma it is custom error that we made)
p1.catch((error)=>{
    console.log("Some error caught in console");
})

//eg. we're fetching data from a network using a promise.
//now tyo data fetch huna ni sakcha, nahuna ni sakcha,
//so esto case ma then ra catch duitai use garnuparchaaa, resolve value aaye matra
//then exeute huncha, ani error aaye matra catch execute huncha

//hamro application ma jati ni potential aauna sakne error ko thau ma catch use garnuparcha