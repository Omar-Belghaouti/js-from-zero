console.log(42 % 10); // 2
console.log(42 % -10); // 2
console.log(-42 % 10); // -2
console.log(-42 % -10); // -2
console.log(-40 % 10); // -0
console.log(40 % 10); // 0

var n = 9; // given n
var i = 0;
function delta(d) {
  // d - any signed integer
  i = (i + d + n) % n; // we add n to (i+d) to ensure the sum is positive
}

var myNum = 10 / 4; // 2.5
var fraction = myNum % 1; // 0.5
myNum = -20 / 7; // -2.857142857142857
fraction = myNum % 1; // -0.857142857142857
