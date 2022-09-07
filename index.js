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
