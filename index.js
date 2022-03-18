var myIterableObject = {};
// An Iterable object must define a method located at the Symbol.iterator key:
myIterableObject[Symbol.iterator] = function () {
  // The iterator should return an Iterator object
  return {
    // The Iterator object must implement a method, next()
    next: function () {
      // next must itself return an IteratorResult object
      if (!this.iterated) {
        this.iterated = true;
        // The IteratorResult object has two properties
        return {
          // whether the iteration is complete, and
          done: false,
          // the value of the current iteration value: 'One'
        };
      }
      return {
        // When iteration is complete, just the done property is needed
        done: true,
      };
    },
    iterated: false,
  };
};

for (var c of myIterableObject) {
  console.log(c);
}
