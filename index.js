var object = { key1: 10, key2: 3, key3: 40, key4: 20 };
var array = [];
for (var people in object) {
  array.push([people, object[people]]);
}

console.log(array);
