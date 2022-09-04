const arr = [15, -4, 4, { age: 5 }];

let reduceMethod;

reduceMethod = (arr) =>
  arr.reduce((accumulator, element) => element + accumulator, 0);
reduceMethod = (arr) => arr.reduce((a, b) => a + b, 1);
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], "another");
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], false);
reduceMethod = (arr) => arr.reduce((a, b) => [a, b], false);
reduceMethod = (arr) => arr.reduce((a, b) => a + 1, 0);
reduceMethod = (arr) => arr.reduce((a, b) => a + 5, 0);
reduceMethod = (arr) => arr.reduce((a, b) => [...a, b.age ?? 1], []);
reduceMethod = (arr) => arr.reduce((a, b) => [...a, b.age ?? 1], []);
console.log(reduceMethod(arr));
