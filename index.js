var object = {};

for (var property in object) {
  // always check if an object has a property
  if (object.hasOwnProperty(property)) {
    // do stuff
  }
}

var obj = { 0: "a", 1: "b", 2: "c" };
Object.keys(obj).map(function (key) {
  console.log(key, obj[key]);
});
