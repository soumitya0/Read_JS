// https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
// https://www.freecodecamp.org/news/the-javascript-array-handbook/

/**
 *
 *   think
 *
 */

var data = [, "asda", "asd", , "asdasdasd"];
console.log(data);
console.log(data[0]);
console.log(data[1]);

/**
 *
 *     Create an Array in JavaScript
 *
 */

var arr = [1, 2, 3, 4, 5]; // typeof Object
console.log("arr = []", arr);

var arr2 = new Array(1, 2, 3, 4, 5, 6); // typeof Object it will create arr with these elements
console.log("new Array() ", arr2);

var arr5 = new Array(8); // typeof Object  it will create a arr with SIZE of 8
console.log(arr5);
console.log(arr5.length);

var arr3 = Array.of(1, 2, 34, 5, 6, 7); // typeof Object
console.log("Array.of()", arr3);

var arr4 = Array.from("soumitya"); // typeof Object
console.log("Array.from()", arr4);

/**
 *      Get Elements from an Array
 *
 */

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
console.log(salad[0]);

/**
 *
 *      Methods pop/push, shift/unshift
 *
 */

const food = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// push() add elements at the end
// pop() remove elements from end  // pop() on an empty array  it returns undefined.
food.push("🍗");
food.push("👨");
console.log(food);
food.pop();
console.log(food);

// unshift() add elements at starting
// shift() add elements at starting
food.unshift("☀️");
food.unshift("⭐");
food.unshift("💪");
console.log(food);
food.shift();
food.shift();

/**
 *
 *          slice and splice
 *
 */

var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice()
// immutable
// use to extract  sub elements from array  return new array it does not remove any elements from source array
// slice(start,end)
// work both +ve , -ve number
var slice1 = num1.slice(2, 5); // return elements from stating poit to end points
var slice2 = num1.slice(5); // return new array from stating i.e 5 to array length
console.log(slice2);
var slice3 = num1.slice(); // return all array elements
console.log(slice3);

// Splice()
// it mutable
// doesn't create new array
//  is use to add, remove elements return new array with removed elements and also it  remove any elements from source array
// splice(starting index,how many element you to remove, add new elements)
var num2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
var splice1 = num2.Splice(5, 3, "a", "b");
console.log(splice1);
console.log(num2);

/**
 *      concat()
 * creates a new array by merging arrays
 *
 */

var num3 = [1, 2, 3, 4, 5, 6];
var num4 = [1, 2, 3, 4, 5, 6];
var mergeArr = num3.concat(num4);
var mergeArr2 = num3.concat(num4, [55, 969, , 858]);
var mergeArr3 = num3.concat("soumitya", "asdasdad", num4, [55, 969, , 858]);

/**
 *       toString() converts an array to a string
 *       join() method also joins all array elements into a string
 *              but in addition you can specify the separator
 *
 *
 */
var num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str_toStrings = num5.toString();
console.log(str_toStrings);

var joinStr = num5.join();
console.log(joinStr);

var joinStr5 = num5.join("*");
console.log(joinStr5);

/**
 *
 *   deleting Elements
 *      delete  just remove the elements and add undefined but not the index
 *      pop()
 *      splice()
 *
 */
var num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num6[5]; // just remove the elements and add undefined but not the index
console.log(num6);

/**
 *
 * indexOf()
 * lastIndexof()
 * array.includes()
 *
 * both will return -1 if no elements are found
 * both will return first occurence
 *
 */

const beasts = ["ant", "bison", "camel", "duck", "bison", "soumitya"];

console.log(beasts.indexOf("bison"));
console.log(beasts.lastIndexOf("bison"));

/**
 *
 * Array.includes()
 *
 *
 * 
 * returning true or false
 
*/
const array1 = [1, 2, 3];
console.log(array1.includes(2));
console.log(array1.includes(22));

/**
 *
 *
 *        findIndex()
 *        find()
 *
 *
 *
 */

// findIndex() = it take callback and  returns the index of the first element of array that satisfies condition
// -1 if not found.

// find() = it take callback and  returns the value of the first element of array that satisfies condition
// find() undefined if not found.

const array155 = [5, 12, 8, 130, 44];

const isLargeNumber = array155.findIndex((val) => {
  return val > 13;
});
console.log(isLargeNumber);

const findNumb = array1.find((val) => {
  return val > 50;
});
console.log(findNumb);

/***
 *
 *
 *    every()  = every elements should pass the test then only it return true else false
 *    some()   = if any elements pass the test case then it will return the true else not
 *
 *
 */

const array555 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;
const isBelowThreshold = (currentValue) => currentValue < 40;

console.log(array555.some(even));

console.log(array555.every(isBelowThreshold));
