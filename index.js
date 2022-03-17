var array1 = [1, 2];
var array2 = [3, 4, 5];

var array3 = array1.concat(array2); // returns a new array
var array3 = [...array1, ...array2];

var array1 = ["a", "b"],
  array2 = ["c", "d"],
  array3 = ["e", "f"],
  array4 = ["g", "h"];

var arrConc = array1.concat(array2, array3, array4);
var arrConc = [...array1, ...array2, ...array3, ...array4];

// Without copying the first array
var longArray = [1, 2, 3, 4, 5, 6, 7, 8],
  shortArray = [9, 10];

longArray.push.apply(longArray, shortArray);
longArray.push(...shortArray);

shortArray.forEach(function (elem) {
  longArray.push(elem);
});
