const obj = { one: 1, two: 2, three: 3 };
var res = Object.entries(obj);
console.log(res);

for (const [key, value] of Object.entries(obj)) {
  console.log(key); // "one", "two" and "three"
  console.log(value); // 1, 2 and 3
}
