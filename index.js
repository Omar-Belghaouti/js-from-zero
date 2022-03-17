// Default sort
var arr = [
  "s",
  "t",
  "a",
  34,
  "K",
  "o",
  "v",
  "E",
  "r",
  "2",
  "4",
  "o",
  "W",
  -1,
  "-4",
];
arr.sort(); // sort method is impure
console.log("arr:", arr);

// Alphabetical sort
arr = ["s", "t", "a", "c", "K", "o", "v", "E", "r", "f", "l", "W", "2", "1"];
arr.sort((a, b) => a.localeCompare(b));
console.log("arr:", arr);

arr = ["s", "t", "a", "c", "K", 1, "v", "E", "r", "f", "l", "o", "W"];
arr.sort((a, b) => a.toString().localeCompare(b));
console.log("arr:", arr);

// String sorting by length (longest first)
arr = ["zebras", "dogs", "elephants", "penguins"];
arr.sort((a, b) => b.length - a.length);
console.log("arr:", arr);

// String sorting by length (shortest first)
arr = ["zebras", "dogs", "elephants", "penguins"];
arr.sort((a, b) => a.length - b.length);
console.log("arr:", arr);

// Numerical sort (ascending)
arr = [100, 1000, 10, 10000, 1];
arr.sort((a, b) => a - b);
console.log("arr:", arr);

// Numerical sort (descending)
arr = [100, 1000, 10, 10000, 1];
arr.sort((a, b) => b - a);
console.log("arr:", arr);

// Sorting array by even and odd numbers
arr = [10, 21, 4, 15, 7, 99, 0, 12];
arr.sort((a, b) => (a & 1) - (b & 1) || a - b);
console.log("arr:", arr);

// Date sort (descending)
var dates = [
  new Date(2007, 11, 10),
  new Date(2014, 2, 21),
  new Date(2009, 6, 11),
  new Date(2016, 7, 23),
];
dates.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log("dates:", dates);

dates.sort(function (a, b) {
  return b - a;
});
console.log("dates:", dates);
