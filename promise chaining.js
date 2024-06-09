//Promise chaining
//for more clarity and recall , once see harry video of promise chaining again.

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("52");
    console.log("Promise resolved after 2 seconds");
  }, 2000);
});

p1.then((value) => { //esle value ma 52 liyracha, reject bhako bhaye esle value ma error linthyo
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2");
    }, 2000);
  });
  return p2;
}).then((value) => { //esle value ma p2 liyracha, i.e., "promise2", the value with which it is resolved
  console.log("We are done");
  return 2;
}).then((value) => { //esle value ma 2 liyracha
    console.log("We are almost done");
    return 5;
}).then((value) => { //esle value ma 5 liyracha
    console.log("We are finally done");
    console.log("the value it took is " + value);
    console.log("Now let's try promise chaining with both then and catch methods");
});

// so esari promise chaining garna milcha, euta promise ko then method(function) bhitra
//value return garera, tesko ni then use garna milcha, aba yo next then le chai previous
// then ko return value lai afno parameter value ko rup ma lincha. Like see this way,
// 'then' is a method(function), ani functions are of 4 types in hai, can have return 
// values, may not, parameters yes no and all. C, JAVA ma bhaye we have to say void, int 
// before function to tell its type, but in js we don't need to, we can simply write function
//ani give return value, add parameters, whatever we like ok.

//And promise chaining (like this) is a solution to callback hell/pyramid of doom,
//because same kura callback use garda, the code would grow horizontally on encountering
//every callbacck within callback ni hai

//tara yo promise chaining use garyo bhane, then then matra thapidai jane ho,
// the code won't grow horizontally. So this is a better practise.

// .then jati samma garda ni huncha.
// tesmai .catch ni garnna milcha like:


let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("52");
    console.log("Promise resolved after 2 seconds");
  }, 2000);
});

p3.then((value) => {
  //esle value ma 52 liyracha, reject bhako bhaye esle value ma error linthyo
  console.log(value);
  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2");
    }, 2000);
  });
  return p4;
})
  .then((value) => {
    //esle value ma p2 liyracha, i.e., "promise2", the value with which it is resolved
    console.log("We are done");
    return 2;
  })
  .then((value) => {
    //esle value ma 2 liyracha
    console.log("We are almost done");
    throw new Error("errormsg");
    return 50;
  })
  //yo then execute hudaina cause mathi ko then ma error aaisakyo, aba siddhai catch ma jump huncha
  .then((value) => {
    console.log("We are done");
    return 56;
  })
  .catch((error) => {
    //esle error ma "errormsg" liyracha
    console.log("We are finally done");
    console.log("the error it took is " + error);
  });

// the catch block handles any rejections in the whole chain.. ani reject hune bitikai siddhai
//catch part ma jump huncha, tyo reject bhayeko tala ko then haru execute nai hudaina hai.
