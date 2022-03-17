var uniqueArray = ["a", 1, "a", 2, "1", 1].filter(function (
  value,
  index,
  self
) {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);

var uniqueArray = [...new Set(["a", 1, "a", 2, "1", 1])];
console.log(uniqueArray);
