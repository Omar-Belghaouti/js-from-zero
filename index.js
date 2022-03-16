function foo() {
  console.trace("My log statement");
}

foo();

var e = new Error("foo");
console.log(e.stack);
