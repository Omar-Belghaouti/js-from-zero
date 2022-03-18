// Let's say we have this Array of Alphabets
var arr = ["a", "b", "c", "d"];
// I want an Array of the first two Alphabets
var newArr = arr.slice(0, 2); // newArr === ["a", "b"]

// Let's say we have this Array of Numbers
// and I don't know it's end
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// I want to slice this Array starting from
// number 5 to its end
var newArr = arr.slice(4); // newArr === [4, 5, 6, 7, 8, 9]
