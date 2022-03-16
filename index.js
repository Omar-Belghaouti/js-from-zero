console.log(Object.prototype.toString.call("String"));

console.log(Object.prototype.toString.call(42));

console.log(Object.prototype.toString.call(true));

console.log(Object.prototype.toString.call(Object()));
console.log(Object.prototype.toString.call({}));

console.log(Object.prototype.toString.call(function () {}));

console.log(Object.prototype.toString.call(new Date()));

console.log(Object.prototype.toString.call(new RegExp()));
console.log(Object.prototype.toString.call(/foo/));

console.log(Object.prototype.toString.call([]));

console.log(Object.prototype.toString.call(null));

console.log(Object.prototype.toString.call(undefined));

console.log(Object.prototype.toString.call(Error()));
