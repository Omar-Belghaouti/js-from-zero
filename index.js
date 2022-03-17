function T() {
  // True
  console.log("T");
  return true;
}
function F() {
  // False
  console.log("F");
  return false;
}

console.log(T() || F());
console.log(F() && T());
console.log(F() || T());

var obj;
if (obj !== undefined && obj.property) {
}
if (typeof obj === "object" && obj.property) {
}

var nullableObj = null;
var obj = nullableObj || {}; // this selects {}
var nullableObj2 = { x: 5 };
var obj2 = nullableObj2 || {}; // this selects {x: 5}

function myMethod(cb) {
  // This can be simplified
  if (cb) {
    cb();
  }
  // To this
  cb && cb();
}
