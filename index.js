var obj = {};
// Define 'foo' as read only and lock it
Object.defineProperty(obj, "foo", {
  value: "original value",
  writable: false,
  configurable: false,
});
Object.defineProperty(obj, "foo", { writable: true }); // TypeError
