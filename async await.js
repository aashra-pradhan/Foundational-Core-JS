// callback hell ko problem ta we solved using promise chaining,
// tara promise chaining ma ni kati .then .then garchau, khojaoge, so aba
// testo nagarikana hami siddhai async await use garcham hai ta.

//esko video nai hera once more, before implementing 

// Aba js ma We can let our certain part of code wait(asynchronous programming basically),
// intezaar garauna sakcham.
// hamile basically euta function lai async bhanera declare garera, tesbhitra ko different
// parts of code lai intezaar garauna sakcham, tesko return value ko intezaar garna sakcham
// using async await in javascript.

// A function can be made async by using async keyword like this:

// async function cup(){
//     return 8;
// }

// hami kunai ni function lai async banayera tesbhitra  promise lai AWAIT garauna sakcham
// An async function always returns a promise
// OTHER values(non-promises) are wrapped in a promise automatically in an async function

async function harry(){
     return 8;
}

harry().then((value)=>{
    console.log(value);
})

//esbata we understand that euta async function le jaile ni promise return garcha,
//even if you return a constant(8).
//that's why harry().then garna possible bhayeko ho ni.