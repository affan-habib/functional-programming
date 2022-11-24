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
console.log("c" > "b"); // True
console.log("b" == "b"); // True

// In javascript charecter can be greater than equals to another charecter compare

console.log(
  "Here you will find some random thought from Affan"
    .toLowerCase()
    .match("affan".toLowerCase())
);
// string.search will return the position of the first character of string
// string.match will return the position of the first character as well as some other inoformation
//indexOf and search behaviors are quite similar but there are differences 
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


// Hoisting

var a = "string";

console.log(a)