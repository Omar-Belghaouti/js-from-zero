var a = "hello";
var b = "world";
console.log(a.localeCompare(b)); // -1

function strcmp(a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
}
console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); // 0
console.log(strcmp("world", "hello")); // 1

var arr = ["bananas", "cranberries", "apples"];
arr.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(arr);
