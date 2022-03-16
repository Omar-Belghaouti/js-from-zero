// base 10 Number
var b10 = 12;
// base 16 String representation
var b16 = b10.toString(16); // "c"

console.log(b16);

// base 16 String representation
var b16 = "c";
// base 10 Number
var b10 = parseInt(b16, 16); // 12

console.log(b10);

var b16 = "3.243f3e0370cdc";
// Split into integer and fraction parts
var [i16, f16] = b16.split(".");
// Calculate base 10 integer part
var i10 = parseInt(i16, 16); // 3
// Calculate the base 10 fraction part
var f10 = parseInt(f16, 16) / Math.pow(16, f16.length); // 0.14158999999999988
// Put the base 10 parts together to find the Number
var b10 = i10 + f10; // 3.14159
console.log(b10);
