function sum(...arguments) {
  if (arguments.length === 1) {
    const [firstArg] = arguments;
    if (firstArg instanceof Array) {
      return sum(...firstArg);
    }
  }
  return arguments.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3));
console.log(sum([1, 2, 3]));
console.log(sum(4));

console.log(2 instanceof Number);
console.log("abc" instanceof String);
console.log(true instanceof Boolean);
console.log(Symbol() instanceof Symbol);

console.log([] instanceof Object, [] instanceof Array);
console.log([].constructor === Object, [].constructor === Array);

function isNumber(value) {
  if (value === null || value === undefined) return false;
  return value.constructor === Number;
}
console.log(isNumber(null), isNumber(undefined));
console.log(
  isNumber("abc"),
  isNumber([]),
  isNumber(() => 1)
);
console.log(isNumber(0), isNumber(Number("10.1")), isNumber(NaN));
