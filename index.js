var a = {};
Object.defineProperty(a, "foo", { value: "original", writable: false });
a.foo = "new";
console.log(a.foo);
