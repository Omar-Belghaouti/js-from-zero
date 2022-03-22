Math.max(4, 12); // 12
Math.max(-1, -15); // -1

Math.min(4, 12); // 4
Math.min(-1, -15); // -15

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  max = Math.max.apply(Math, arr),
  min = Math.min.apply(Math, arr);
console.log(max); // Logs: 9
console.log(min); // Logs: 1

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  max = Math.max(...arr),
  min = Math.min(...arr);
console.log(max); // Logs: 9
console.log(min); // Logs: 1
