const arr = [15, -4, 4];

let reduceMethod;

reduceMethod = (arr) =>
  arr.reduce((accumulator, element) => element + accumulator, 0);
reduceMethod = (arr) => arr.reduce((a, b) => a + b, 1);
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], "another");
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], false);
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], false);
// console.log(reduceMethod(arr));

const array = [
  {
    key: 1,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    obj: {
      valOne: 123,
      valTwo: "41",
    },
  },
  {
    key: 2,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    obj: {
      valOne: 123,
      valTwo: "41",
    },
  },
  {
    key: 3,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    obj: {
      valOne: 123,
      valTwo: false,
    },
  },
  {
    key: 4,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    obj: {
      valOne: 123,
      valTwo: "41",
    },
  },
  {
    key: 5,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    array: [34, 12, 134],
  },
];

// const reduceMethodTwo = (arr) =>
//   arr.reduce((prev, array) => array.obj.valTwo + prev, []);
//   console.log(reduceMethodTwo(array)); // Expected Return 123123123123
//   console.log(typeof(reduceMethodTwo(array))); // Expected Return String

const array1 = [15, 4];
const reduceMethodThree = (arr) =>
  arr.map((el) => parseInt(el?.obj?.valTwo) || 0).reduce((a, b) => a + b, 0);

reduceMethodThree(array); // Expected Return 123
reduceMethodThree(array1); // Expected Return 0

const reduceMethodFour = (arr) => arr.filter((el) => el.array);
reduceMethodFour(array)[0].array.reduce((a, b) => a + b); // Expected Return 180
