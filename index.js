var hello = "Hello";
var world = "world";
var helloW = `${hello} ${world}`;
console.log(helloW);

var intString = String(32);
var booleanString = String(true);
var nullString = String(null);
console.log(intString, booleanString, nullString);

var intString2 = (5232).toString();
var booleanString2 = false.toString();
var objString = {}.toString();
console.log(intString2, booleanString2, objString);

console.log(String.fromCharCode(104, 101, 108, 108, 111));

var objectString = new String("Yes, I am a String object");
console.log(typeof objectString);
console.log(typeof objectString.valueOf());

var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar" console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar); // => "FooBar" "a".concat("b", " ", "d") // => "ab d"

var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"

console.log(`a\\b`);
console.log(String.raw`a\\b`);
