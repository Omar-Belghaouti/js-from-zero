var a = Math.round(2.3); // a is now 2
var b = Math.round(2.7); // b is now 3
var c = Math.round(2.5); // c is now 3

var c = Math.round(-2.7); // c is now -3
var c = Math.round(-2.5); // c is now -2

var a = Math.ceil(2.3); // a is now 3
var b = Math.ceil(2.7); // b is now 3
var c = Math.ceil(-1.1); // c is now -1

var a = Math.floor(2.3); // a is now 2
var b = Math.floor(2.7); // b is now 2
var c = Math.floor(-1.1); // c is now -2

2.3 | 0; // 2 (floor)
-2.3 | 0; // -2 (ceil)
NaN | 0; // 0

Math.trunc(2.3); // 2 (floor)
Math.trunc(-2.3); // -2 (ceil)
Math.trunc(2147483648.1); // 2147483648 (floor)
Math.trunc(-2147483649.1); // -2147483649 (ceil)
Math.trunc(NaN); // NaN

var myNum = 2 / 3; // 0.6666666666666666
var multiplier = 100;
var a = Math.round(myNum * multiplier) / multiplier; // 0.67
var b = Math.ceil(myNum * multiplier) / multiplier; // 0.67
var c = Math.floor(myNum * multiplier) / multiplier; // 0.66

var myNum = 10000 / 3; // 3333.3333333333335
var multiplier = 1 / 100;
var a = Math.round(myNum * multiplier) / multiplier; // 3300
var b = Math.ceil(myNum * multiplier) / multiplier; // 3400
var c = Math.floor(myNum * multiplier) / multiplier; // 3300

// value is the value to round
// places if positive the number of decimal places to round to
// places if negative the number of digits to round to
function roundTo(value, places) {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}
var myNum = 10000 / 3; // 3333.3333333333335
roundTo(myNum, 2); // 3333.33
roundTo(myNum, 0); // 3333
roundTo(myNum, -2); // 3300

function ceilTo(value, places) {
  var power = Math.pow(10, places);
  return Math.ceil(value * power) / power;
}
function floorTo(value, places) {
  var power = Math.pow(10, places);
  return Math.floor(value * power) / power;
}
