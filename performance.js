// Performace Check
// Function Execution time

function doSomething(a) {
    return console.log(a + "something");
  }
  
  var startTime = performance.now();
  doSomething("hello ");
  var endTime = performance.now();
  console.log(startTime, endTime);
  
  // Example Two
  var start = new Date().getTime();
  
  for (let i = 0; i < 50000; ++i) {
    // do something
  }
  
  var end = new Date().getTime();
  var time = end - start;
  console.log("Execution time: " + time);
  
  console.log("2" - 3 - "3");
  