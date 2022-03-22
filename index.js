var a = 9,
  b = 3,
  c = a + b;

var a = 9,
  b = 3,
  c = 8,
  d = a + b + c;

null + null; // 0
null + undefined; // NaN
null + {}; // "null[object Object]"
null + ""; // "null"

"123" + 1; // "1231" (not 124)

true + 1; // 2
false + 5; // 5
null + 1; // 1
undefined + 1; // NaN

true + "1"; // "true1"
false + "bar"; // "falsebar"
