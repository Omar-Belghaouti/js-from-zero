console.log(null == undefined);
console.log(null === undefined);

if (null) console.log("won't be logged");
if (undefined) console.log("won't be logged");

false == undefined; // false
false == null; // false
false === undefined; // false
false === null; // false
