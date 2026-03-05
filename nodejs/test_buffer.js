// convert utf-8 string to buffer
const b = Buffer.from('hello');
console.log(b);
console.log(b.toString('hex'));

const b2 = Buffer.from('68656c6c6f', 'hex');
console.log(b2);

const s = b2.toString('utf8')
console.log(s);
