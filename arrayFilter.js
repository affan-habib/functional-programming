let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

const bigCities = (arr) => arr.filter((city) => city.population > 2099451);
console.log(bigCities(cities));
//Expected Return
// [
//   { name: "Los Angeles", population: 3792621 },
//   { name: "New York", population: 8175133 },
//   { name: "Chicago", population: 2695598 },
// ];

cities
  .filter((city) => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map((city) => console.log(city.name + ":" + city.population));
//Expected Return
// Philadelphia:1526006
// Houston:2099451
// Chicago:2695598
