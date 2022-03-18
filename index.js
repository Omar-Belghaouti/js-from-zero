Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false
Array.isArray(1); // false

[] instanceof Array; // true
var obj = {};
obj instanceof Array; // false

var arr = [];
Object.setPrototypeOf(arr, null);
Array.isArray(arr); // true
arr instanceof Array; // false
