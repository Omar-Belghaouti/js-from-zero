var array = [1, 2, 3];
var to_remove = 2;
var array2 = array.filter(function (val) {
  return val !== to_remove;
});
console.log(array2);

// This will remove all elements with value of 2
while ((index = array.indexOf(2) !== -1)) {
  array.splice(index, 1);
}
console.log(array);

// To remove only the first found element
var index = array.indexOf(to_remove);
if (index !== -1) {
  array.splice(index, 1);
}
