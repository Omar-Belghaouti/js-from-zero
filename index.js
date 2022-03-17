var realArray = ["a", "b", "c"];
var arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// arrayLike.forEach((value) => {
//   /* Do something */
// }); // Errors
var realArray = Array.from(arrayLike);
realArray.forEach((value) => {
  /* Do something */
  console.log(value);
}); // Works

var realArray = Object.values(arrayLike);

var realArray = Object.keys(arrayLike).map((key) => arrayLike[key]);

// arrayLike.forEach(function () {
//   // Do stuff
// }); // Error! forEach is not defined.
[].forEach.bind(arrayLike)(function (val) {
  // Do stuff with val
}); // Wow! this works
