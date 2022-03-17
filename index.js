const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
console.log(length, height, hypotenuse);

var [, b, , c] = [1, 2, 3, 4];
console.log(b, c);

var [b, c, ...xs] = [2, 3, 4, 5];
console.log(b, c, xs);

function area([length, height]) {
  return (length * height) / 2;
}

console.log(area(triangle));
