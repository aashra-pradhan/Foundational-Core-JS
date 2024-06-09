//Regular expressions are very important in Javascript.
//They help us to search text in our entire string, and use it for different purposes like password matching,
//text replacement for certain repetitive words and so on.


const txt = "Sanju is a Very Very good very girl";
const txt1 = txt.replace("Very","Really");
console.log(txt1);

// esari "Very" lai replace garna khojda, first occurence of Very matrai replace huncha,
// if we wanna replace all occurences of "Very", we should now use a regular expression
// as follows

const regex = /Very/g;
const txt2 = "Seetu is a Very Very good very girl";
const txt3 = txt2.replace(regex,"Really");
console.log(txt3);

// now if we wanna replace all occurences of very without caring for the upper of lower
//case, then regex ma "g" ko side ma "i" ni thapnuparyo, g flag means globally and i means
// case insensitive flag, but yo case chai first letter ko matra insensitive ho
//tala you can see euta "VeRy" lekechu, tyo chai replace bhako chaina, cause bich ma chai case
//sensitive nai hudo rahecha, first letter matra insensitive.
//Estai aru flags ni huncha jastai multiline/singeline/unicode/sticky, you can refer to their
//use in the regxr website.

const regex1 = /Very/gi;
const txt4 = "Raveena is a VeRy Very good very girl";
const txt5 = txt4.replace(regex,"Really");
console.log(txt5);

//Harry introduced us to the Regexr.com website, jun ko "cheatsheet" tab ma you can learn different
//patterns for matching the string
//I'll try some here. Regular expression is a vast topic, jasari ni math garna sakincha(eg. for password matching, email address ma @ cha ki chaina, all that we needed for client side form validation using js as well)
//Tesko lagi tyo website herdai you can try.
//majjale bujhchau, tyaha cheatsteet anusar pattern lekhdai garesi tala every kura ko explanation ni aaudai jancha so you'll understand that ani chahida kheri use garda bhayo.




