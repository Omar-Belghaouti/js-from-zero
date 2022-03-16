console.log("My message");

var obj = { test: 1 };
console.log(["string"], 1, obj, window);

console.log([0, 3, 32, "a string"]);
console.log({ key1: "value", key2: "another value" });
console.log({ key1: "val", key2: ["one", "two"], key3: { a: 1, b: 2 } });

console.log(new Date(0));
console.log(function test(a, b) {
  return c;
});

console.info("this is an info");
console.warn("this is warning");
console.error("this is an error");
console.timeStamp("msg");

function sec() {
  first();
}
function first() {
  console.trace();
}
sec();
