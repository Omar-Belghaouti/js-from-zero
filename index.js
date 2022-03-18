let obj = { a: 1 };
let obj2 = { ...obj, b: 2, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 };

let obj3 = { ...obj, b: { c: 2 } };
console.log(obj3); // { a: 1, b: { c: 2 } };
