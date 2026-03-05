import { readFile, writeFile } from 'node:fs/promises';

const text = await readFile('input.txt', 'utf8');
console.log('Read from input.txt:\n' + text);

await writeFile('output.txt', text.toUpperCase(), 'utf8');

console.log('done');
