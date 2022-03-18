var myObject = {};

myObject["special property 😅"] = "it works!";
console.log(myObject["special property 😅"]);

myObject[123] = "hi!"; // number 123 is automatically converted to a string
console.log(myObject["123"]); // notice how using string 123 produced the same result
console.log(myObject["12" + "3"]); // string concatenation
console.log(myObject[120 + 3]); // arithmetic, still resulting in 123 and producing the same result
console.log(myObject[123.0]); // this works too because 123.0 evaluates to 123
console.log(myObject["123.0"]); // this does NOT work, because '123' != '123.0'
