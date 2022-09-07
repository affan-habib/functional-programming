const functionOne = (param1) => {
  return function functionTwo(param2) {
    return param1 + " " + param2;
  };
};

let functionThree = functionOne("Affan");
let output = functionThree("is a Javascript developer");
console.log(output);

export default functionOne;
