// good-nonblocking-sleep.js
setTimeout(() => console.log("second"), 2000); // doesn't block
console.log("first");
