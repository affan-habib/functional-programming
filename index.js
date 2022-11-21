// String Method

let string = "saasm";

const string4 = "";

console.log(string4.padStart(2, ".") + "hello world");
// i can say two chacter spaces added and replacing the spaces with second argument.

console.log(string4.padStart(2, "abc") + "hello world");
// Here added two spaces but second argument was 3 charecter , it will only take available space to replace
console.log(string.endsWith("g"));
// is the string endsWith g. Of course not
console.log(string.includes("g"));
// Is there any "g" in the string
console.log(string.lastIndexOf("g"));
// Last index of "g"
let arry = string
  .split("")
  .map((el) => el.replace("a", "f"))
  .map((el) => el.replace("s", "a"))
  .map((el) => el.replace("m", "n"))
  .join(" ")
  .toUpperCase(); // I am affan as m a fan of javascript
// let mapped = arry.map((el) => el.replace("s", "b")).join("");
console.log(arry);
