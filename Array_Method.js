// https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
// https://www.freecodecamp.org/news/the-javascript-array-handbook/

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

var num1 = [1, 2, 34, 5];
