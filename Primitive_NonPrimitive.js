/* PRIMITIVE DATA TYPE */

// a primitive is data that is not an object and has no methods.
// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

// All primitives are immutable, i.e., they cannot be CHANGE.

// Using a string method doesn't mutate the string
let myString = "bluebells";
myString.length = 4;
console.log(myString); //bluebells
console.log(myString.length); //9

//--
let myArr = [5, 6, 8, 2, 4, 7];
myArr.length = 2;
console.log(myArr); //[5, 6]
console.log(myArr.length); //2
