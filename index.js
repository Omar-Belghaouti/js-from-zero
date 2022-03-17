var date1 = new Date();

console.log(date1.toString());

console.log(date1.toTimeString());

console.log(date1.toDateString());

console.log(date1.toUTCString());

console.log(date1.toISOString());

console.log(date1.toGMTString());

console.log(date1.toLocaleDateString());

console.log(date1.toLocaleDateString(["zh", "en-US"]));

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date1.toLocaleDateString([], options));
