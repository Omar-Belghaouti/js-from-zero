var filtered = [0, undefined, {}, null, "", true, 5].filter(Boolean);
console.log(filtered);

function startsWithLetterA(str) {
  if (str && str[0].toLowerCase() == "a") {
    return true;
  }
  return false;
}
var str =
  "Since Boolean is a native javascript function/constructor that takes [one optional parameter] and the filter method also takes a function and passes it the current array item as a parameter, you could read it like the following";
var strArray = str.split(" ");
var wordsStartsWithA = strArray.filter(startsWithLetterA); //["a", "and", "also", "a", "and", "array", "as"]
console.log(wordsStartsWithA);
