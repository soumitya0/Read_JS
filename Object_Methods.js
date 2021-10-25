/**
 * Mutable
 * object change the order of occurence of keys
 *
 *
 */

var person1 = {
  name: "soumitya",
  age: "30",
  1: 1,
  6: 6,
  2: 2,
  one: "one",
};
person2 = person1; // these will mutable if we update person2 it will also change the person1
// object change the order of occurence of keys
person2.name = "jhon";

console.log(person1);

/**
 *
 * object methods
 * Object.keys() retuen array
 * Object.values() return array
 * Object.entries() return array of array
 */

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); // ["a", "b", "c"]
console.log(Object.values(object1)); //["somestring", 42, false]
console.log(Object.entries(object1)); //[Array(2), Array(2), Array(2)]

/**
 *https://dev.to/aumayeung/things-that-you-don-t-know-about-the-javascript-s-object-constructor-3266
 * Object.create()
 *
 *  Object.create() method is used to create a new object with the specified prototype object and properties.
 *  Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
 */

const person2 = {
  name: "jhon",
  age: 36,
};

const p1 = Object.create(person2); //inherit all the prototyope object properties of person2
// it will not modify person1
console.log(p1);
console.log(p1.name);
console.log(p1.age);
p1.name = "soumitya";
console.log(p1);
console.log(person2);

const person3 = {
  name: "bond",
  age: 30,
  printName: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.age}`);
  },
};

const p3 = Object.create(person3);
p3.name = "soumitya";
p3.age = 23;
p3.printName();

/**
 *
 *
 * Objects — Writable, Configurable & Enumerable
 *
 *
 */
