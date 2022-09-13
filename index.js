function hasDuplicates(object) {
  let elements = object.map((a) => a.name);
  return new Set(elements).size !== elements.length;
}

const obj = { name: "javascript" };
const functionOne = (obj) => console.log(obj.name);
functionOne(obj);

const objTwo = { name: "Java", age: 23 };
const functionTwo = (object, property) => console.log(object[property]);
functionTwo(objTwo, "age");


const arr = ["f", false, -0, undefined, false, null]

arr.length = 8

console.log(arr)

console.log(arr.map((a, index) => ( a || index)))

// Expected Return [ 'f', 1, 2, 3, 4, 5, <2 empty items> ]
