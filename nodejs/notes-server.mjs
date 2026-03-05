// notes-server.mjs (in-memory)
import { createServer } from 'node:http';

let nextId = 1;
const notes = [];

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // GET /notes
  if (req.method === 'GET' && url.pathname === '/notes') {
    return json(res, 200, notes);
  }

  // POST /notes
  if (req.method === 'POST' && url.pathname === '/notes') {
    const raw = await readBody(req);
    let body;
    try { body = JSON.parse(raw || '{}'); } catch { return json(res, 400, { error: 'Invalid JSON' }); }

    if (!body.text || String(body.text).trim() === '') {
      return json(res, 400, { error: 'text is required' });
    }

    const note = { id: nextId++, text: String(body.text), createdAt: Date.now() };
    notes.push(note);
    return json(res, 201, note);
  }

  // GET /notes/:id
  if (req.method === 'GET' && url.pathname.startsWith('/notes/')) {
    const id = Number(url.pathname.split('/')[2]);
    const note = notes.find((n) => n.id === id);
    if (!note) return json(res, 404, { error: 'Not found' });
    return json(res, 200, note);
  }

  return json(res, 404, { error: 'Not found' });
}).listen(3000, () => console.log('http://localhost:3000'));
