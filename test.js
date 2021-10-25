const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const childObj = {
  name: {
    configurable: false,
    writable: false,
    value: "hello",
  },
  age: {
    writable: true,
    value: "hello",
  },

  a: {
    configurable: true,
    enumerable: true,
    value: "hello", // comimg from prototype
  },
};
const newObj = Object.create(obj, childObj);
console.log(newObj, "haha");
newObj.address = "abc nagar";
newObj.name = 1;
newObj.age = 1;
newObj.a = "soumitya";
console.log(newObj);

// enumerable
for (let keys in newObj) {
  console.log(keys);
}

// configurable
delete newObj.a;

delete newObj.address;
console.log(newObj, "configurable");

//writable:ture means that the property’s value can be changed if ture if false it will not change

//enumerable:false means property during ittration  will not shows only work for prototype

// configurable:true means the object can be delete
