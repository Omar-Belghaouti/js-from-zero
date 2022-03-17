var year = new Date().getFullYear();
console.log(year);

var month = new Date().getMonth();
console.log(month);

var day = new Date().getDate();
console.log(day);

var hours = new Date().getHours();
console.log(hours);

var minutes = new Date().getMinutes();
console.log(minutes);

var seconds = new Date().getSeconds();
console.log(seconds);

var milliseconds = new Date().getMilliseconds();
console.log(milliseconds);

var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toUTCString());
