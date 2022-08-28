function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 2000);
console.log("After setTimeout");

//Expected Return
// After setTimeout
// foo has been called
