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
