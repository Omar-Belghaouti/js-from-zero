var i = 0;
if (i < 1) {
  console.log("i is smaller than 1");
}

if (i < 1) {
  console.log("i is smaller than 1");
} else {
  console.log("i was not smaller than 1");
}

if (i < 1) {
  console.log("i is smaller than 1");
} else {
  if (i < 2) {
    console.log("i is smaller than 2");
  } else {
    console.log("none of the previous conditions was true");
  }
}

if (i < 1) {
  console.log("i is smaller than 1");
} else if (i < 2) {
  console.log("i is smaller than 2");
} else {
  console.log("none of the previous conditions was true");
}

if (i < 1) console.log("i is smaller than 1");
