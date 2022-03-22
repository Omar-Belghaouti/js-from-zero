var a;
a = 0b0011 | 0b1010; // a === 0b1011 // truth table
// 1010 | (or)
// 0011
// 1011 (result)

a = 0b0011 & 0b1010; // a === 0b0010 // truth table
// 1010 & (and)
// 0011
// 0010  (result)

a = ~0b0011; // a === 0b1100 // truth table
// 10 ~(not)
// 01 (result)

a = 0b1010 ^ 0b0011; // a === 0b1001 // truth table
// 1010 ^ (xor)
// 0011
// 1001  (result)

a = 0b0001 << 1; // a === 0b0010
a = 0b0001 << 2; // a === 0b0100
a = 0b0001 << 3; // a === 0b1000

var n = 2;
var a = 5.4;
var result = a << n === Math.floor(a) * Math.pow(2, n); // result is true
a = 5.4 << n; // 20

a = 0b1001 >> 1; // a === 0b0100
a = 0b1001 >> 2; // a === 0b0010
a = 0b1001 >> 3; // a === 0b0001
a = 0b1001 >>> 1; // a === 0b0100
a = 0b1001 >>> 2; // a === 0b0010
a = 0b1001 >>> 3; // a === 0b0001

a = 0b11111111111111111111111111110111 | 0;
console.log(a); // -9
b = a >> 2; // leftmost bit is shifted 1 to the right then new left most bit is set to on (1)
console.log(b); // -3
b = a >>> 2; // leftmost bit is shifted 1 to the right. the new left most bit is set to off (0)
console.log(b); // 2147483643

a = 256.67;
n = 4;
result = a >> n === Math.floor(Math.floor(a) / Math.pow(2, n)); // result is true
a = a >> n; // 16
result = a >>> n === Math.floor(Math.floor(a) / Math.pow(2, n)); // result is true
a = a >>> n; // 16

a = -256.67;
result = a >>> n === Math.floor(Math.floor(a) / Math.pow(2, n)); // result is false

a |= b; // same as: a = a | b;
a ^= b; // same as: a = a ^ b;
a &= b; // same as: a = a & b;
a >>= b; // same as: a = a >> b;
a >>>= b; // same as: a = a >>> b;
a <<= b; // same as: a = a << b;
