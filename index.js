var isLittleEndian = true;
(() => {
  var buf = new ArrayBuffer(4);
  var buf8 = new Uint8ClampedArray(buf);
  var data = new Uint32Array(buf);
  data[0] = 0x0f000000;
  if (buf8[0] === 0x0f) {
    isLittleEndian = false;
  }
})();
console.log(isLittleEndian);

var myNum = 0x11223344 | 0; // 32 bit signed integer
var buf = new ArrayBuffer(4);
var data8 = new Uint8ClampedArray(buf);
var data32 = new Uint32Array(buf);
data32[0] = myNum; // store number in 32Bit array
console.log(data8[0].toString(16)); // 0x44
console.log(data8[1].toString(16)); // 0x33
console.log(data8[2].toString(16)); // 0x22
console.log(data8[3].toString(16)); // 0x11
