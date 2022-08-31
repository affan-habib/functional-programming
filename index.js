const arr = [15, -4, 4];

let reduceMethod;

reduceMethod = (arr) =>
  arr.reduce((accumulator, element) => element + accumulator, 0);
reduceMethod = (arr) => arr.reduce((a, b) => a + b,1)
reduceMethod = (arr) => arr.reduce((a, b) =>  [a,b],"another")
reduceMethod = (arr) => arr.reduce((a, b) =>  [a,b],false)
reduceMethod = (arr) => arr.reduce((a, b) =>  [a,b],false)
console.log(reduceMethod(arr));
