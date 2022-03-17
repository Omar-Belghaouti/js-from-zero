var value = 1;
switch (value) {
  case 1:
    console.log("I will always run");
    break;
  case 2:
    console.log("I will never run");
    break;
}

switch (value) {
  case 1:
    console.log("I will only run if value === 1");
  // Here, the code "falls through" and will run the code under case 2
  case 2:
    console.log("I will run if value === 1 or value === 2");
    break;
  case 3:
    console.log("I will only run if value === 3");
    break;
}

var animal = "Lion";
switch (animal) {
  case "Dog":
    console.log('I will not run since animal !== "Dog"');
    break;
  case "Cat":
    console.log('I will not run since animal !== "Cat"');
    break;
  default:
    console.log("I will run since animal does not match any other case");
}

function john() {
  return "John";
}
function jacob() {
  return "Jacob";
}
var name = "John";
switch (name) {
  case john(): // Compare name with the return value of john() (name == "John")
    console.log('I will run if name === "John"');
    break;
  case "Ja" + "ne": // Concatenate the strings together then compare (name == "Jane")
    console.log('I will run if name === "Jane"');
    break;
  case john() + " " + jacob() + " Jingleheimer Schmidt":
    console.log("His name is equal to name too!");
    break;
}

// Multiple inclusive criteria for cases
var x = "c";
switch (x) {
  case "a":
  case "b":
  case "c":
    console.log("Either a, b, or c was selected.");
    break;
  case "d":
    console.log("Only d was selected.");
    break;
  default:
    console.log("No case was matched.");
    break; // precautionary break if case order changes
}
