# HCDD 411 — Interactive Web Technologies
**Penn State University · Md Touhidul Islam**

---

## What's different here

These aren't slides with code *screenshots*. Every lecture is a self-contained HTML file where **students write and run code directly inside the slide** — edit, hit Run, see output instantly. No separate IDE, no copy-pasting into a console.

> 👉 **[Open the live demo](https://shohan29531.github.io/hcdd411/index.html)** — try a playground from the actual slides.

---

## The slides run your code

Each concept slide has an embedded playground:

```
┌─────────────────────────────────────────────┐
│  PLAYGROUND: Create Your Variables           │
│ ┌─────────────────────────────────────────┐ │
│ │ var numberOfStudents = 30;              │ │
│ │ let studentName = "Sam";               │ │  ← editable textarea
│ │ const COURSE_NAME = "IST 411";         │ │
│ │                                         │ │
│ │ console.log("Name:", studentName);      │ │
│ └─────────────────────────────────────────┘ │
│  [ Run Code ]                                │
│                                             │
│  Output:                                    │
│  Name: Sam                                  │  ← captured console.log
│  Students: 30                               │
└─────────────────────────────────────────────┘
```

The later modules (API, Node.js) upgrade to a full **CodeMirror IDE** — syntax highlighting, `Ctrl+Enter` to run, `Ctrl+/` to comment, auto-format, and a status bar.

---

## Course modules

| Module | File | Slides | Playgrounds |
|--------|------|:------:|:-----------:|
| Client-Server Architecture | `client-server/client-server.html` | 17 | — |
| JavaScript Part 1 — syntax & functions | `javascript-syntax/js-syntax-1.html` | 15 | 12 |
| JavaScript Part 2 — objects, arrays, ES6 | `javascript-syntax/js-syntax-2.html` | 16 | 13 |
| jQuery — DOM, events, animations | `jquery/jquery.html` | 19 | 17 |
| APIs & Async JS — AJAX, Fetch, Axios | `API/api.html` | 27 | 24 |
| Node.js — build a REST API live | `nodejs/build-backend-nodejs.html` | 17 | 15 |

---

## Run locally

```bash
git clone https://github.com/Shohan29531/hcdd411.git
cd hcdd411

# Any slide works — just open the HTML file directly in your browser
open javascript-syntax/js-syntax-1.html
```

No build step. No server. No install. Single `.html` file per module.

---

## Why this approach

Most web courses separate slides from practice. Here the slide *is* the practice environment. Students can experiment with every concept the moment it's introduced — change a value, break something, fix it — without switching context. The feedback loop is immediate and contained within the lecture itself.

This was built with AI assistance to achieve the level of interactive polish that would ordinarily take a full frontend team — as a solo instructor.