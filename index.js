var anObject = {
  foo: "bar",
  length: "interesting",
  0: "zero!",
  1: "one!",
};
var anArray = ["zero.", "one."];

console.log(anArray[0], anObject[0]); // outputs: zero. zero!
console.log(anArray[1], anObject[1]); // outputs: one. one!
console.log(anArray.length, anObject.length); // outputs: 2 interesting
console.log(anArray.foo, anObject.foo); // outputs: undefined bar

anArray.foo = "it works!";
console.log(anArray.foo);

anObject.length = 2; // Array-like object (List)

console.log(typeof anArray == "object", typeof anObject == "object"); // outputs: true true
console.log(anArray instanceof Object, anObject instanceof Object); // outputs: true true
console.log(anArray instanceof Array, anObject instanceof Array); // outputs: true false
console.log(Array.isArray(anArray), Array.isArray(anObject)); // outputs: true false
