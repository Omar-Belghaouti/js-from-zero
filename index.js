// 2 Dimensional arrays
function flattenES6(arr) {
  return [].concat(...arr);
}
var arrL1 = [1, 2, [3, 4]];
console.log(flattenES6(arrL1)); // [1, 2, 3, 4]

function flatten(arr) {
  return [].concat.apply([], arr);
}
var arrL1 = [1, 2, [3, 4]];
console.log(flatten(arrL1)); // [1, 2, 3, 4]

// Higher dimension arrays
var deeplyNested = [4, [5, 6, [7, 8], 9]];
console.log(String(deeplyNested).split(",").map(Number));
