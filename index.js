function wordCount(val) {
  var wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, "").length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length,
  };
}

var someMultilineText = "Hello World\n How are you?";
console.log(wordCount(someMultilineText));
