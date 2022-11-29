function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));


const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);


// Unary plus (+)


