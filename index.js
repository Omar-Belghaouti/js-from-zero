var myArray = [1, 2, 3, 4];
Math.min.apply(null, myArray); // 1
Math.max.apply(null, myArray); // 4

var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray); // 99
var minValue = Math.min(...myArray); // 1

var maxValue = myArray[0];
for (var i = 1; i < myArray.length; i++) {
  var currentValue = myArray[i];
  if (currentValue > maxValue) {
    maxValue = currentValue;
  }
}

var myArray = [1, 2, 3, 4];
myArray.reduce(function (a, b) {
  return Math.min(a, b);
}); // 1
myArray.reduce(function (a, b) {
  return Math.max(a, b);
}); // 4

myArray.reduce((a, b) => Math.min(a, b)); // 1
myArray.reduce((a, b) => Math.max(a, b)); // 4

function myMax(array) {
  return array.reduce(function (maxSoFar, element) {
    return Math.max(maxSoFar, element);
  }, -Infinity);
}
myMax([3, 5]); // 5
myMax([]); // -Infinity
Math.max.apply(null, []); // -Infinity
