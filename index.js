var obj = {};
Object.defineProperty(obj, "foo", { value: "foo" });
console.log(obj.foo);

Object.defineProperty(obj, "nameOfTheProperty", {
  value: "valueOfTheProperty",
  writable: true, // if false, the property is read-only
  configurable: true, // true means the property can be changed later
  enumerable: true, // true means property can be enumerated such as in a for..in loop
});

console.log(obj);

var obj2 = {};
Object.defineProperties(obj2, {
  property1: {
    value: true,
    writable: true,
  },
  property2: { value: "Hello", writable: false },
});

console.log(obj2.property1);
