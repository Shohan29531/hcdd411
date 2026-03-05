import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const start = Date.now();

const rs = createReadStream('server.log');
const gz = createGzip();
const ws = createWriteStream('server.log.gz');

ws.on('finish', () => {
  console.log(`[${Date.now() - start}ms] FINISH: compression complete (all data flushed)`);
});

ws.on('close', () => {
  console.log(`[${Date.now() - start}ms] CLOSE: file descriptor closed`);
});

rs.on('error', (e) => console.error('read error:', e));
gz.on('error', (e) => console.error('gzip error:', e));
ws.on('error', (e) => console.error('write error:', e));

rs.pipe(gz).pipe(ws);

console.log(`[${Date.now() - start}ms] DONE: after pipe() call`);