var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf());

var date1 = new Date();
var date2 = new Date();
console.log(date1 === date2);

var date1 = new Date();
var date2 = date1;
console.log(date1 === date2);

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1 < date2);

var date1 = new Date();
var date2 = new Date(date1.valueOf());
console.log(date1 <= date2);
