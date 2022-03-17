var arr = [1, 2, 3, ...[4, 5, 6]]; // [1, 2, 3, 4, 5, 6]
// in ES < 6, the operations above are equivalent to
arr = [1, 2, 3];
arr.push(4, 5, 6);

var arr = [1, 2, 3, ...[..."456"].map((x) => parseInt(x))]; // [1, 2, 3, 4, 5, 6]

var arr = [..."123456"].map((x) => parseInt(x)); // [1, 2, 3, 4, 5, 6]

var arr = [..."123456"]; // ["1", "2", "3", "4", "5", "6"]

function myFunction(a, b, c) {}
let args = [0, 1, 2];
myFunction(...args);
// in ES < 6, this would be equivalent to:
myFunction.apply(null, args);

[a, b, ...rest] = [1, 2, 3, 4, 5, 6]; // rest is assigned [3, 4, 5, 6]

function myFunction(a, b, ...rest) {
  console.log(rest);
}
myFunction(0, 1, 2, 3, 4, 5, 6); // rest is [2, 3, 4, 5, 6]
