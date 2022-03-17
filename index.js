// Naive approach
function formatDate(dayOfWeek, day, month, year) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}
//Foo lives in a country with timezone GMT + 1
var birthday = new Date(2000, 0, 1);
console.log(
  "Foo was born on: " +
    formatDate(
      birthday.getDay(),
      birthday.getDate(),
      birthday.getMonth(),
      birthday.getFullYear()
    )
);

// Correct approach
function formatDate2(dayOfWeek, day, month, year) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}
//Foo lives in a country with timezone GMT + 1
var birthday = new Date(Date.UTC(2000, 0, 1));
console.log(
  "Foo was born on: " +
    formatDate2(
      birthday.getUTCDay(),
      birthday.getUTCDate(),
      birthday.getUTCMonth(),
      birthday.getUTCFullYear()
    )
);

console.log(Date.UTC(2000, 0, 31, 12));

var utcDate = new Date(Date.UTC(2000, 0, 31, 12));
console.log(utcDate);

var utcDate = new Date(Date.UTC(2000, 0, 31, 12));
var localDate = new Date(2000, 0, 31, 12);
console.log(localDate - utcDate === utcDate.getTimezoneOffset() * 60 * 1000);

var date = new Date();
date.setUTCFullYear(2000, 0, 31);
date.setUTCHours(12, 0, 0, 0);
console.log(date);

var date = new Date(Date.UTC(2000, 0, 31, 12));
var timestamp = date.getTime();
//Alternatively
var timestamp2 = Date.UTC(2000, 0, 31, 12);
console.log(timestamp === timestamp2);

//And when constructing a date from it elsewhere...
var otherDate = new Date(timestamp);
//Represented as a universal date
console.log(otherDate.toUTCString());
//Represented as a local date
console.log(otherDate);
