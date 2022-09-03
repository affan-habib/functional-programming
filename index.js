const array = [
  {
    key: 1,
    numberOne: "74",
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
  {
    key: 6,
    numberOne: 74,
    numberTwo: 42,
    numberThree: 42,
    numberFour: 42,
    textOne: "John",
    array: [34, 12, 134],
  },
];

const [a, ...b] = array;
// console.log({a}, {b});


const functionOne = ({x,...y}) => y
console.log(functionOne(array))