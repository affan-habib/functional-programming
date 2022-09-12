function hasDuplicates(array) {
  let elements = array.map((a) => a.name);
  return new Set(elements).size !== elements.length;
}

const obj = { name: "javascript" };
const functionOne = (obj) => console.log(obj.name);
functionOne(obj);

const objTwo = { name: "Java", age: 23 };
const functionTwo = (array, property) => console.log(array[property]);
functionTwo(objTwo, "age");

const arr = [
  { name: "Java", age: 2 },
  { name: "Python", age: 3 },
  { name: "Javascript", age: 4 },
];
