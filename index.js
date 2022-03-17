var result = ["one", "two", "three", "four"].map(function (value, index, arr) {
  return value.length;
});
console.log("result:", result);

var result = ["one", "two", "three", "four"].map((value) => value.length);
console.log("result:", result);

["one", "two"].map(function (value, index, arr) {
  console.log(this); // window (the default value in browsers) return value.length;
});

["one", "two"].map(
  function (value, index, arr) {
    console.log(this); // Object { documentation: "randomObject" } return value.length;
  },
  {
    documentation: "randomObject",
  }
);
