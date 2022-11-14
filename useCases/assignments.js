// let a = "true";
// let b = undefined;
// let c = a && (b = a);
// a = a && c;
// console.log(a, b, c);

//Expected Return true true true
let x = false;
let y = undefined;
let z = x && (y = x);
x = x && z;
console.log(x, y, z);
//Expected Return false undefined false

const a = 1;
const b = 2;
const c = 3;

// default precedence
console.log(a + b * c / 2 / 2)
console.log((a + b) * c)
console.log(a * c + b * c)

// Scoping

var m = 1;
let n = 1;

if (true) {
  var m = 2;
  let n = 2;
  console.log({n})
}

console.log({m});
// expected output: 2

console.log({n});
// expected output: 1

const obj = {
  f_name : 25,
  l_name : "25"
}
let res = Object.is(obj.f_name, obj.l_name)
console.log(res)

console.log(null === undefined)

Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true

console.log("Start")
  setTimeout(() => {
    console.log("middle")   
  }, 0);

console.log("End")


function doSomething(){
  setTimeout(()=> console.log("Do Something"),1000)
}

doSomething()
console.log("Start Second"[2])
console.log("End Second")
console.log(0/0) // NAN 
console.log(-50/-5) // NAN 
console.log(true + 1) // 2
console.log(true - 5) // -4
console.log(false - 5) //-5
console.log(false + +"5") // 5
console.log(false + -"10") // -10
console.log(typeof(null + -"32")) // -32 number
console.log(undefined + -"32") // -10
let a;
a = 'f'
var b;
var b = 3
console.log(!!null)

function func(){
    console.log(d)
}

// func() //Cannot access 'd' before initialization
const d = 4
func() //4

// convert something to boolean
// logical and/or nullish colesing operator


console.log(!null || "truthy value") // true
console.log(!!null || "truthy value") // "truthy Value"
console.log(Boolean("truthy One") || "truthy Two") // true
console.log(Boolean(!"truthy One") && "truthy Two") // false
console.log(null ?? "truthy Two") // "truthy two"
console.log(undefined ?? "truthy Two") // "truthy two"
console.log(Boolean("truthy One") ?? "truthy Two") // true


// When left operand is true then && go further
// When left operand is false then || go further
// When left operand is null/undefined then ?? go further

console.log(!!NaN) // false
console.log(typeof NaN) //number
console.log(typeof !!NaN)  // boolean
console.log(typeof !!NaN === "boolean")   // true


// Assuming the following variables
 let x = 5 ,y = 10, z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25
console.log(x,y,z) //25
