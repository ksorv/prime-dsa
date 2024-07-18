const arr = new ArrayBuffer(6);

// taking an 8 bit window out of the arr
const a8bit = new Uint8Array(arr);

a8bit[0] = 45;

console.log(arr);

// taking an 16 bit window out of the arr
const a16bit = new Uint16Array(arr);
a16bit[2] = 45;

console.log(arr);