// src/server.mjs (v7)
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NOTES_PATH = path.join(__dirname, '..', 'data', 'notes.json');

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}
function notFound(res) { return json(res, 404, { error: 'Not found' }); }

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

async function loadNotes() {
  const raw = await readFile(NOTES_PATH, 'utf8');
  return JSON.parse(raw || '[]');
}
async function saveNotes(notes) {
  await writeFile(NOTES_PATH, JSON.stringify(notes, null, 2), 'utf8');
}
function nextId(notes) {
  const max = notes.reduce((m, n) => Math.max(m, n.id || 0), 0);
  return max + 1;
}
function parseId(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length !== 2) return null;
  const id = Number(parts[1]);
  return Number.isFinite(id) ? id : null;
}

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && url.pathname === '/health') {
    return json(res, 200, { ok: true });
  }

  if (req.method === 'GET' && url.pathname === '/notes') {
    const notes = await loadNotes();
    return json(res, 200, notes);
  }

  if (req.method === 'POST' && url.pathname === '/notes') {
    const notes = await loadNotes();

    let body;
    try {
      const raw = await readBody(req);
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return json(res, 400, { error: 'Invalid JSON' });
    }

    const text = String(body.text ?? '').trim();
    if (!text) return json(res, 400, { error: 'text is required' });

    const now = Date.now();
    const note = { id: nextId(notes), text, createdAt: now, updatedAt: now };

    notes.push(note);
    await saveNotes(notes);
    return json(res, 201, note);
  }

  if (req.method === 'GET' && url.pathname.startsWith('/notes/')) {
    const id = parseId(url.pathname);
    if (id === null) return json(res, 400, { error: 'Invalid id' });

    const notes = await loadNotes();
    const note = notes.find((n) => n.id === id);
    if (!note) return json(res, 404, { error: 'Not found' });

    return json(res, 200, note);
  }

  // NEW: PUT /notes/:id
  if (req.method === 'PUT' && url.pathname.startsWith('/notes/')) {
    const id = parseId(url.pathname);
    if (id === null) return json(res, 400, { error: 'Invalid id' });

    let body;
    try {
      const raw = await readBody(req);
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return json(res, 400, { error: 'Invalid JSON' });
    }

    const text = String(body.text ?? '').trim();
    if (!text) return json(res, 400, { error: 'text is required' });

    const notes = await loadNotes();
    const idx = notes.findIndex((n) => n.id === id);
    if (idx === -1) return json(res, 404, { error: 'Not found' });

    notes[idx] = { ...notes[idx], text, updatedAt: Date.now() };
    await saveNotes(notes);

    return json(res, 200, notes[idx]);
  }

  return notFound(res);
}).listen(PORT, () => console.log('http://localhost:' + PORT));
