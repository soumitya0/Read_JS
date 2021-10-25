/**
 *
 *
 *      map() and filter()
 *
 *
 *  */

// MAP creates a new array
// MPA return new Array
var arr = [1, 2, 3, 4, 5, 6, 7];

var newArr = arr.map((el) => {
  return el * 2;
});
console.log(newArr); //2,4,3,8,10,12,14

var newArr_Map = arr.map((el, i) => {
  arr[i] = el * 2;
});
console.log(newArr_Map); // return undefined

// filter() return new Array
var newFilter = arr.filter((el) => {
  return el * 2;
});
console.log(newFilter); // 1,2,3,4,5,6,7

// now you can see I have `return el*2` both for **map** and **filter** they are giving a different output

// **Filter()**
// The filter() method creates a new array filled with all array elements that pass a test implemented by the function.

//  If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

var arr = [1, 2, 3, 4, 5, 6, 7];
var newFilter = arr.filter((el) => {
  return el > 3;
});
console.log(newFilter); //[1, 2, 3, 4]

// **Map()**
// The map() method is used for creating a new array from an existing one,
// applying a function to each one of the elements of the first array
var arr = [1, 2, 3, 4, 5, 6, 7];

var newArr = arr.map((el) => {
  return el * 2;
});

console.log(newArr); //2,4,3,8,10,12,14

/**
 *
 *      forEach() vs map()
 *
 */

var arr2 = [1, 2, 3, 4, 5, 6, 7];

var map_fun = arr2.map((el) => {
  return el * 2;
});

console.log(map_fun);
/**
 * forEach() 
 * function by default return undefine; if without return will return undefine
      function add() {}
      console.log(add());
 */
var forEach_fun = arr2.forEach((el) => {
  return el * 2;
});
console.log(forEach_fun); // undefined

/**
 * The forEach() method executes a provided function once for each array element.
 * forEach() is use to muted an array
 * Basically forEach works as a traditional for loop
 * looping over the array and providing you array elements to do operations on them.
 *
 */
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));

array1.forEach((ar) => {
  ar[i] = n * 2; // ar and array1 pointing the same reference memory
});
console.log(array1);
/**
 *
 *
 * forIn() vs forOf()
 *
 * forIn ittrate over only object -> arr, object
 * forOf ittrate over iterator function only -> arr, string
 *
 */
var element = [12, 22, 32, 42, 52, 63, 73];

const persone = {
  name: "john",
  age: 30,
};

console.log(typeof persone);
// forIn Ittreate for an object

for (let key in persone) {
  console.log(key);
}
for (let key in element) {
  console.log(key);
}
for (let key of element) {
  console.log(key);
}
