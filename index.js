var result = [1, 2, 3, 4].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
});
console.log("result:", result);

result = [2].reduce(function (a, b) {
  console.log(a, b); // prints: 1 2
  return a + b;
}, 1);
console.log("result:", result);

// Flattening an array
var array = [
  { key: "one", value: 1 },
  {
    key: "two",
    value: 2,
  },
  {
    key: "three",
    value: 3,
  },
];
var obj = array.reduce(function (obj, current) {
  obj[current.key] = current.value;
  return obj;
}, {});
console.log("obj:", obj);

obj = array.reduce(
  (obj, current) =>
    Object.assign(obj, {
      [current.key]: current.value,
    }),
  {}
);
console.log("obj:", obj);

obj = array.reduce(
  (obj, current) => ({ ...obj, [current.key]: current.value }),
  {}
);
console.log("obj:", obj);

// Map using reduce
function map(list, fn) {
  return list.reduce(function (newList, item) {
    return newList.concat(fn(item));
  }, []);
}
// Usage:
result = map([1, 2, 3], function (n) {
  return n * n;
}); // → [1, 4, 9]
console.log("result:", result);

// Find min or max value
var arr = [4, 2, 1, -10, 9];
result = arr.reduce(function (a, b) {
  return a < b ? a : b;
}, Infinity); // → -10
console.log("result:", result);

// Find unique values
var arr = [1, 2, 1, 5, 9, 5];
result = arr.reduce((prev, number) => {
  if (prev.indexOf(number) === -1) {
    prev.push(number);
  }
  return prev;
}, []);
// → [1, 2, 5, 9]
console.log("result:", result);
