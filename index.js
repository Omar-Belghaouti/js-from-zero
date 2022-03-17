console.log("" == 0);
console.log(0 == "0");
console.log("" == "0");
console.log(false == 0);
console.log(false == "0");

// objects are compared by reference, not value
console.log(Number("0") == Number("0"));
console.log(new Number("0") == new Number("0"));
