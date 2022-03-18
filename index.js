var obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
};

var array = Object.keys(obj).map(function (key) {
  return obj[key];
});
console.log(array); // ["hello", "this is", "javascript!"]
