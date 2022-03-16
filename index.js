function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  return [...str].reverse().join("");
}

function reverseString3(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}

console.log(reverseString("string"));
console.log(reverseString2("string"));
console.log(reverseString3("string"));
