var people = [{ name: "bob" }, { name: "john" }];
var bob = people.find((person) => person.name === "bob");
console.log(bob);

for (var i = 0; i < people.length; i++) {
  if (people[i].name === "bob") {
    break; // we found bob
  }
}

array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];

var index = array.findIndex((item) => item.value === 3); // 2
var index = array.findIndex((item) => item.value === 12); // -1
