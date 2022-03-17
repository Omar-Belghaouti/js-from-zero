var arr1 = [11, 22, 33];
var arr2 = arr1.reverse();
console.log(arr2); // [33, 22, 11]
console.log(arr1); // [33, 22, 11]

function deepReverse(arr) {
  arr.reverse().forEach((elem) => {
    if (Array.isArray(elem)) {
      deepReverse(elem);
    }
  });
  return arr;
}
var arr = [1, 2, 3, [1, 2, 3, ["a", "b", "c"]]];
deepReverse(arr);
console.log(arr);
