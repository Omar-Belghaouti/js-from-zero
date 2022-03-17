1 < 2; // true
2 <= 2; // true
3 >= 5; // false
true < false; // false (implicitly converted to numbers, 1 > 0)

"a" < "b"; // true
"1" < "2"; // true
"100" > "12"; // false ('100' is less than '12' lexicographically!)

"1" < 2; // true
"3" > 2; // true
true > "2"; // false (true implicitly converted to number, 1 < 2

1 < "abc"; // false
1 > "abc"; // false

1 > ""; // true
1 < ""; // false
1 > null; // true
1 < null; // false
1 > undefined; // false
1 < undefined; // false

new Date(2015) < 1479480185280; // true
null > -1; //true
({
  toString: function () {
    return 123;
  },
} > 122); //true
