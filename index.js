// Shift
var array = [1, 2, 3, 4];
array.shift();
console.log(array);

// Pop
var array = [1, 2, 3];
array.pop();
console.log(array);

// Splice
var array = [1, 2, 3, 4];
array.splice(1, 2);
console.log(array);

var array = [1, 2, 3, 4];
var res = array.splice(2);
console.log(array);
console.log(res);

// Delete
var array = [1, 2, 3, 4, 5];
console.log(array.length); // 5
delete array[2];
console.log(array); // [1, 2, undefined, 4, 5]
console.log(array.length); // 5

array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array); // [1, 2]
