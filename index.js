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

const arr = ["f", false, -0, undefined, false, null, -5, 10];

arr.length = 8;

console.log(arr);

console.log(arr.map((a, index) => a || index));

// Expected Return [ 'f', 1, 2, 3, 4, 5, <2 empty items> ]
console.log(arr.filter((el) => el >= 0));
// Expected Return [ false, -0, false, null, 10 ]
// it will check greater than 0 and also return all other items

console.log(arr.filter(Boolean));

const filtered = arr.filter(Boolean);
filtered[0] = "First One";
console.log(filtered);

console.log(arr);

const findOne = (arr) => arr.find((el) => typeof el == "string");

console.log(findOne(arr));

// Find Will return referece type data. if we change the object it will affect on main array.

const calculatePrice = (name = "Javascript", price = 100, vat = 0.1) =>
  `${name} price is ${price + vat * 100}`;
  console.log(calculatePrice("something", 10, 0.5));
  console.log(calculatePrice(undefined, 10, 0.5));
  console.log(calculatePrice(null, 10, 0.5));
  
  //Expected Return
  // something price is 60
  // Javascript price is 60
  // null price is 60
  // default param will not apply when null value found. To avoid this use null colesing
  const calculatePriceTwo = (name = "Javascript", price = 100, vat = 0.1) =>
  `${name ?? "Javascript"} price is ${price + vat * 100}`;
  console.log(calculatePriceTwo(null, 10, 0.5));