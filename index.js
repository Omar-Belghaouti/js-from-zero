console.log("NaN:", isNaN(NaN));
console.log("1:", isNaN(1));
console.log("-2e-4", isNaN(-2e-4));
console.log("Infinity:", isNaN(Infinity));
console.log("true:", isNaN(true));
console.log("false:", isNaN(false));
console.log("null:", isNaN(null));
console.log('"":', isNaN(""));
console.log('" ":', isNaN(" "));
console.log('"45.3"', isNaN("45.3"));
console.log('"1.2e3"', isNaN("1.2e3"));
console.log('"Infinity"', isNaN("Infinity"));
console.log("new Date():", isNaN(new Date()));
console.log('"10$"', isNaN("10$"));
console.log('"hello"', isNaN("hello"));
console.log("undefined", isNaN(undefined));
console.log(":", isNaN());
console.log(
  "function(){}",
  isNaN(function () {})
);
console.log("{}", isNaN({}));
console.log("[]", isNaN([]));
console.log("[1]", isNaN([1]));
console.log("[1, 2]", isNaN([1, 2]));
console.log("[true]", isNaN([true]));
