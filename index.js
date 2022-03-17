var x = 5 + 7; // x.valueOf() is 12,  typeof x is a number
varx = 5 + "7"; // x.valueOf() is 57,  typeof x is a string
varx = "5" + 7; // x.valueOf() is 57,  typeof x is a string
var x = 5 - 7; // x.valueOf() is -2,  typeof x is a number
varx = 5 - "7"; // x.valueOf() is -2,  typeof x is a number
varx = "5" - 7; // x.valueOf() is -2,  typeof x is a number
varx = 5 - "x"; // x.valueOf() is NaN, typeof x is a number
