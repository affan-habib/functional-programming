// Symbols are premitive datatype

let name = "Javascript";
let str = new String("Javascript");
let obj = { lang: "Javascript" };
let symbolOne = Symbol("I am symbolOne");
let symbolTwo = Symbol("I am symbolTwo");
console.log(symbolOne)

//Symbol Keys 
let symbolWithKey1 = Symbol.for("I am symbolWithKey1");
let symbolWithKey2 = Symbol.for("I am symbolWithKey1");
console.log(symbolWithKey1 === symbolWithKey2)