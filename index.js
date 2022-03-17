console.log(1 * "two" === NaN);
console.log(NaN === 0);
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(NaN < 0);
console.log(NaN > 0);
console.log(NaN >= NaN);
console.log(NaN >= "two");

console.log(NaN !== 0);
console.log(NaN !== NaN);

console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));

console.log(+0 === -0);

console.log(typeof NaN === "number");
