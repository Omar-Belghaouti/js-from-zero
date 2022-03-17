var numbers = [5, 32, 43, 4];
var odd = numbers.filter(function (n) {
  return n % 2 !== 0;
});
console.log("odd:", odd);

odd = numbers.filter((n) => n % 2 !== 0);
console.log("odd:", odd);

var people = [
  { id: 1, name: "John", age: 28 },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];
var young = people.filter(function (person) {
  return person.age < 35;
});
console.log("young:", young);

var young = people.filter((person) => person.age < 35);
console.log("young:", young);
