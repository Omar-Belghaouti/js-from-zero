// For..in loop
//Ex 1 : Simple data
var x = { a: 10, b: 3 },
  props = [];
for (prop in x) {
  props.push(prop);
}
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a: 10, __proto__: { b: 10 } },
  props = [];
for (prop in x) {
  props.push(prop);
}
console.log(props); //["a","b"]

//Ex 3 : Data with non enumerable properties
var x = { a: 10 },
  props = [];
Object.defineProperty(x, "b", { value: 5, enumerable: false });
for (prop in x) {
  props.push(prop);
}
console.log(props); //["a"]

// Object.keys() function
//Ex 1 : Simple data
var x = { a: 10, b: 3 },
  props;
props = Object.keys(x);
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a: 10, __proto__: { b: 10 } },
  props;
props = Object.keys(x);
console.log(props); //["a"]

//Ex 3 : Data with non enumerable properties
var x = { a: 10 },
  props;
Object.defineProperty(x, "b", { value: 5, enumerable: false });
props = Object.keys(x);
console.log(props); //["a"]

// Object.getOwnProperties() function
//Ex 1 : Simple data
var x = { a: 10, b: 3 },
  props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a: 10, __proto__: { b: 10 } },
  props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a"]

//Ex 3 : Data with non enumerable properties
var x = { a: 10 },
  props;
Object.defineProperty(x, "b", { value: 5, enumerable: false });
props = Object.getOwnPropertyNames(x);
console.log(props); //["a", "b"]

// Retrieve all properties
function getAllProperties(obj, props = []) {
  return obj == null
    ? props
    : getAllProperties(
        Object.getPrototypeOf(obj),
        props.concat(Object.getOwnPropertyNames(obj))
      );
}
var x = { a: 10, __proto__: { b: 5, c: 15 } };
//adding a non enumerable property to first level prototype
Object.defineProperty(x.__proto__, "d", { value: 20, enumerable: false });
console.log(getAllProperties(x)); // ["a", "b", "c", "d", "...other default core props..."];
