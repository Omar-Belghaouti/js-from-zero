const existing = { a: 1, b: 2, c: 3 };
const clone = Object.assign({}, existing);
console.log(clone);

const { ...clone2 } = existing;
console.log(clone2);

var clone3 = {};
for (const prop in existing) {
  if (existing.hasOwnProperty(prop)) {
    clone3[prop] = existing[prop];
  }
}
console.log(clone3);
