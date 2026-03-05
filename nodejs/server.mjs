import { createServer } from 'node:http';

async function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/items') {
    try {
      const body = await readJson(req);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ created: true, body }));
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
    return;
  }
  res.writeHead(404).end();
}).listen(3000);
