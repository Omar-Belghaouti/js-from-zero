// For loops
for (var i = 0, length = 10; i < length; i++) {
  console.log(i);
}

var myArray = [1, 2, 3, 4, 5];
for (let i = 0, length = myArray.length; i < length; i++) {
  console.log(myArray[i]);
}

for (var i = myArray.length - 1; i > -1; i--) {
  console.log(myArray[i]);
}

for (
  var key = 0, value = myArray[key], length = myArray.length;
  key < length;
  value = myArray[++key]
) {
  console.log(value);
}

var i = 0,
  length = myArray.length;
for (; i < length; ) {
  console.log(myArray[i]);
  i++;
}

var key = 0,
  value;
for (; (value = myArray[key++]); ) {
  console.log(value);
}

// While loops
var key = 0;
while ((value = myArray[key++])) {
  console.log(value);
}

for (i in myArray) {
  console.log(myArray[i]);
}

for (let value of myArray) {
  let twoValue = value * 2;
  console.log("2 * value is: %d", twoValue);
}

var myArray = [3, 5, 7];
myArray.foo = "hello";
for (var i in myArray) {
  console.log(i); // logs 0, 1, 2, "foo"
}
for (var i of myArray) {
  console.log(i); // logs 3, 5, 7
}

for (let i of myArray.keys()) {
  let twoValue = myArray[i] * 2;
  console.log("2 * value is: %d", twoValue);
}

myArray.forEach((value, index, arr) => {
  var twoValue = value * 2;
  console.log("2 * value is: %d", twoValue);
});

var myArray = [1, 2, 3, 4],
  i = 0,
  sum = 0;
while (i++ < myArray.length) {
  sum += i;
}
console.log(sum);

[2, 4, 7, 9].every(function (value, index, arr) {
  console.log(value);
  return value % 2 === 0; // iterate until an odd number is found
});

[2, 4, 7, 9].some(function (value, index, arr) {
  console.log(value);
  return value === 7; // iterate until we find value 7
});
