const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
