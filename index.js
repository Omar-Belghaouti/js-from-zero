// Method 1
var arr = [1, 2, 3, 4];
arr = []; // reference a to a new array (memory leak)
console.log(arr);

var count = 0;
function addListener(arr) {
  // arr is closed over
  var b = document.body.querySelector("#foo" + count++);
  b.addEventListener("click", function (e) {
    // this functions reference keeps
    // the closure current while the
    // event is active
    // do something but does not need arr
  });
}
arr = ["big data"];
var i = 100;
while (i > 0) {
  addListener(arr); // the array is passed to the function
  arr = []; // only removes the reference, the original array remains
  array.push("some large data"); // more memory allocated
  i--;
}
// there are now 100 arrays closed over, each referencing a different array
// no a single item has been deleted

// Method 2
arr.length = 0;

// Method 3
arr.splice(0); // should not use if you don't want the removed items
// only use this method if you do the following
var keepArr = arr.splice(0); // empties the array and creates a new array containing the removed items
