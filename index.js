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