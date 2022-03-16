console.log(typeof undefined);
console.log(typeof null);

let foo;
console.log("is undefined?", foo === undefined);

foo = { a: "a" };
console.log("is undefined?", foo.b === undefined);

function bar() {
  return;
}
console.log("is undefined?", bar() === undefined);

function foobar(param) {
  console.log("is undefined?", param === undefined);
}
foobar("a");
foobar();

console.log(window.hasOwnProperty(undefined));
