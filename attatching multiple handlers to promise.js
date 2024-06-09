// eutai promise ko lagi chutta chuttai then methods use garnu is
//attatching muliple handlers to promise

let p1=new Promise((resolve,reject)=>{
    resolve(78);
});

p1.then((value)=>{
    console.log("Hurrah");
});

p1.then((value)=>{
    console.log("Yayy");
});

//so esari p1 lai hamile multiple handlers rakhecham, duitai execute huuncha,
//pahila hurrah ani yayy
//esari hami kei display gare sathai network bata data fetch garna sakcham simultaneously.

//ani don't confuse this attatching multiple handlers concept with promise chaining
// They're totally different.
//promise chaining ma euta then execute bhayera, tesle value return garepachi matra next then 
// chalna sakcha with the value it has received from tesko mathi ko then, but yo concept ma
//all thens are indepedent and don't have to wait for the value from any other then, they all
//(then methods) directly receive their value from that one main promise.