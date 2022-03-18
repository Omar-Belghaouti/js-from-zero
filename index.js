var obj = {};
obj.propertyName1 = 5; //translates behind the scenes into
//either assigning 5 to the value field* if it is a data property
//or calling the set function with the parameter 5 if accessor property
//*actually whether an assignment would take place in the case of a data property
//also depends on the presence and value of the writable field

var obj = { propertyName1: 1 }; //the pair is actually ('propertyName1', {value:1, // writable:true,
// enumerable:true,
// configurable:true})
Object.defineProperty(obj, "propertyName2", {
  get: function () {
    console.log(
      "this will be logged " +
        "every time propertyName2 is accessed to get its value"
    );
  },
  set: function () {
    console.log(
      "and this will be logged " +
        "every time propertyName2's value is tried to be set"
    ); //will be treated like it has enumerable:false, configurable:false
  },
});
//propertyName1 is the name of obj's data property
//and propertyName2 is the name of its accessor property

obj.propertyName1 = 3;
console.log(obj.propertyName1); //3
obj.propertyName2 = 3; //and this will be logged every time propertyName2's value is tried to be set
console.log(obj.propertyName2); //this will be logged every time propertyName2 is accessed to get its value
