console.time("response in");

alert("Click to continue");
console.timeEnd("response in");

alert("One more time");
console.timeEnd("response in");

var elms = document.getElementsByTagName("*");

console.time("Loop time");

for (let i = 0; i < 5000; i++) {
  for (let j = 0; j < elms.length; j++) {}
}

console.timeEnd("Loop time");
