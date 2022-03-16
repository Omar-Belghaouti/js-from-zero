var o1 = 1,
  o2 = "2",
  o3 = "";
console.count(o1);
console.count(o2);
console.count(o3);
console.count(1);
console.count("2");
console.count("");

console.count(42.3);
console.count(Number("42.3"));
console.count("42.3");

console.count(console.constructor);
console.count(function () {});
console.count(Object);
var fn1 = function myfn() {};
console.count(fn1);
console.count(Number);

console.count(undefined);
console.count(document.Batman);
var obj;
console.count(obj);
console.count(Number(undefined));
console.count(NaN);
console.count(NaN + 3);
console.count(1 / 0);
console.count(String(1 / 0));
console.count(window);
console.count(document);
console.count(console);
console.count(console.__proto__);
console.count(console.constructor.prototype);
console.count(console.__proto__.constructor.prototype);
console.count(Object.getPrototypeOf(console));
console.count(null);

console.clear();
