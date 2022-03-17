var animal = "kitty";
var result = animal === "kitty" ? "cute" : "still nice";
console.log(result);

var animal = "kitty";
var result = "";
if (animal === "kitty") {
  result = "cute";
} else {
  result = "still nice";
}
console.log(result);

var a = 0;
var str = "not a";
var b = "";
b = a === 0 ? ((a = 1), (str += " test")) : (a = 2);
console.log(a, b);

var a = 1;
a === 1 ? console.log("Hey, it is 1!") : 0;

var foo, bar;
foo ? (bar ? 1 : 2) : 3;
if (foo) {
  if (bar) {
    1;
  } else {
    2;
  }
} else {
  3;
}

// Cannot break within ternaries
// var animal = 'kitty';
// for (var i = 0; i < 5; ++i) {
// (animal === 'kitty') ? break:console.log(i); }
