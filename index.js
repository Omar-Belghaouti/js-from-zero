1 == 1; // true
1 == true; // true  (operand converted to number: true => 1)
1 == "1"; // true  (operand converted to number: '1' => 1 )
1 == "1.00"; // true
1 == "1.00000000001"; // false
1 == "1.00000000000000001"; // true  (true due to precision loss)
null == undefined; // true
1 == 2; // false
0 == false; // true
0 == undefined; // false
0 == ""; // true
