let string = "congratulations";
console.log(string.indexOf("r")); //=>4
console.log(string.indexOf("l")); //=>8
console.log(string.lastIndexOf("e")); //=> -1

//note string indexOf can take one or more char
//but the position of the first char is always is returned
console.log(string.indexOf("tu")); //=>6
console.log(string.indexOf("t")); //=>6

//slicing
console.log(string.slice(4, 8)); //-> 'ratu'

//trim is a methd that remove all the white space such as
// empty spaces, new lines, tabs ...
let string2 = " Okay \n";
console.log(string2.length); //=>7
let removedSpace = string2.trim();
console.log(removedSpace);
console.log(removedSpace.length); //=>4

//we have methd String(number).padStart(numberOfDigit, '0')
//=> number of digit it should composed of
//=> second arg, add zeros at the start of to make if have the
//same number of digits as required by first argument
console.log(String(6).padStart(3, "0")); //=> 006
console.log(String(9).padStart(4, "0")); //=> 0009

//split and join
let sentence = "There a way to come up to anything";

let eachWord = sentence.split(" ");
console.log(eachWord);

let joined = eachWord.join("|");
console.log(joined);

//we can access string as we do for array element
console.log(sentence[9]); //=>a
console.log(sentence[0]); //=> T
