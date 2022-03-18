var arr = [1, 2, 3, 4];
var arr2 = new Array(1, 2, 3, 4);
var arr3 = new Array(); // []
var arr4 = new Array(4); // 4 length array with undefined elements
var arr5 = new Array("foo"); // ["foo"]
var arr6 = Array.of(21, "Hello", "World"); // [21, "Hello", "World"]
var newArray = Array.from({ length: 5 }, (_, index) => Math.pow(index, 4)); // [0, 1, 16, 81, 256]
