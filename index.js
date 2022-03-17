var string = "Hello, World!";

console.log(string.indexOf("o"));
console.log(string.indexOf("foo"));

console.log(string.lastIndexOf("o"));
console.log(string.lastIndexOf("foo"));

console.log(string.includes("Hello"));
console.log(string.includes("foo"));

string = string.replace("Hello", "Bye");
console.log(string);

string = string.replace(/W.{3}d/g, "Universe");
console.log(string);

var str = "heLlo, woRlD!";
str = str.replace(/([a-zA-Z])([a-zA-Z]+)/g, function (match, g1, g2) {
  return g1.toUpperCase() + g2.toLowerCase();
});
console.log(str);
