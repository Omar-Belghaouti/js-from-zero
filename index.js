Object.is(1, 1); // true
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
Object.is(true, "true"); // false
Object.is(false, 0); // false
Object.is(null, undefined); // false
Object.is(1, "1"); // false
Object.is([], []); // false

[1].includes(1); // true
[+0].includes(-0); // true
[NaN].includes(NaN); // true
[true].includes("true"); // false
[false].includes(0); // false
[1].includes("1"); // false
[null].includes(undefined); // false
[[]].includes([]); // false

1 === 1; // true
+0 === -0; // true
NaN === NaN; // false
true === "true"; // false
false === 0; // false
1 === "1"; // false
null === undefined; // false
[] === []; // false

1 == 1; // true
+0 == -0; // true
NaN == NaN; // false
true == "true"; // false
false == 0; // true
1 == "1"; // true
null == undefined; // true
[] == []; // false
