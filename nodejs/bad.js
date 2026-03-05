// bad-blocking-sleep.js
const end = Date.now() + 2000;
while (Date.now() < end) {} // blocks everything for 2s
console.log("done");
