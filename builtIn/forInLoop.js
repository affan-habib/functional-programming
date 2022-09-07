const obj = {
  name: "Affan",
  age: 30,
  address: {
    street: "Douglas Court",
    city: "New York",
  },
};

for (key in obj) {
  console.log("key", key);
}
//Expected Return
// key name
// key age
// key address

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  console.log((text += person[x]));
}

// Expected Return
// John
// JohnDoe
// JohnDoe25
