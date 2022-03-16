console.log("%s has %d points", "Sam", 100);

console.log("%cHello, World!", "color: blue; font-size: xx-large");

console.log(
  "%cHello %cWorld%c!!", // string to be printed
  "color: blue;", // applies color formatting to the 1st substring
  "font-size: xx-large;", // applies font formatting to the 2nd substring
  "/* no CSS rule*/" // does not apply any rule to the remaining substring
);
