var dictionary = {
  lettuce: "a veggie",
  banana: "a fruit",
  tomato: "it depends on who you ask",
  apple: "a fruit",
  Apple: "Steve Jobs rocks!", // properties are case-sensitive
};

console.log(dictionary["lettuce"]);

// console.log(dictionary.word); // doesn't work because word is taken literally and dictionary has no field named `word`
// console.log(dictionary.apple); // it works! because apple is taken literally
// console.log(dictionary[word]); // it works! because word is a variable, and the user perfectly typed in one of the words from our dictionary when prompted
// console.log(dictionary[apple]); // error! apple is not defined (as a variable)

var property = "test";
var obj = {
  [property]: 1,
};
console.log(obj.test); //1

var property = "test";
var obj = {};
obj[property] = 1;
