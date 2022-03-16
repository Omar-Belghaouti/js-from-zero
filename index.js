var aString = "my string";
var anInt = 5;
var anObj = {};

console.log(typeof aString === "string");
console.log(typeof anInt === "string");
console.log(typeof anObj === "string");

var aStringObj = new String("my string");
console.log(typeof aStringObj);
console.log(aStringObj instanceof String);

var isString = function (value) {
  return typeof value === "string" || value instanceof String;
};

var aString = "Primitive String";
var aStringObj = new String("String Object");
console.log(isString(aString)); // true
console.log(isString(aStringObj)); // true
console.log(isString({})); // false
console.log(isString(5)); // false

var pString = "Primitive String";
var oString = new String("Object Form of String");
console.log(Object.prototype.toString.call(pString)); //"[object String]"
console.log(Object.prototype.toString.call(oString)); //"[object String]"

var aString = "Primitive String";
// Generic check for a substring method
if (aString.substring) {
}
// Explicit check for the String substring prototype method
if (aString.substring === String.prototype.substring) {
  aString.substring(0);
}
