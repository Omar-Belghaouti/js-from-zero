var sampleObject = { hello: "world" };
var res = Object.getOwnPropertyDescriptor(sampleObject, "hello");
console.log(res);
