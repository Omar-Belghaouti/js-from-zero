// Some
[false, false].some(function (value) {
  return value;
});
// Result: false
[false, true].some(function (value) {
  return value;
});
// Result: true
[true, true].some(function (value) {
  return value;
});
// Result: true

// Every
[false, false].every(function (value) {
  return value;
});
// Result: false
[false, true].every(function (value) {
  return value;
});
// Result: false
[true, true].every(function (value) {
  return value;
});
// Result: true
