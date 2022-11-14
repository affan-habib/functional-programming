let numbers = [1, 2, 4, 5, 7, 11];
let start = performance.now();
let sorted = numbers.sort((a, b) => a - b);
let end = performance.now();
let time = end - start;
console.log({ sorted }, { time });

console.table(numbers)
