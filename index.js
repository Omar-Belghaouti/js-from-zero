var obj = {};
Object.defineProperty(obj, "foo", { value: "show", enumerable: true });
Object.defineProperty(obj, "bar", { value: "hide", enumerable: false });
for (var prop in obj) {
  console.log(obj[prop]);
}
