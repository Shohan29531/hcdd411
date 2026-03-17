# HCDD 411: Distributed Object Computing
**Penn State University · College of Information Sciences and Technology**

---

This course introduces the fundamental concepts of distributed-object computing — client/server architecture, networked application design, and the deployment of distributed systems. Students learn how modern web applications are built from the ground up: how a browser talks to a server, how data moves across the network, how APIs connect systems, and how to write the JavaScript, jQuery, and Node.js that make it all work.

It is an elective in the HCDD Bachelor's program, open to students in the Systems Development Option, and sits at the intersection of human-centered design and the engineering of real, working software.

---

## What makes these materials different

Most course slides show code. These slides **run** it.

Every lecture in this repository is a single HTML file. Open it in a browser and you get the full presentation — but embedded in each concept slide is an editable code editor. Students change the code, hit Run, and see output right there on the slide. No switching to a separate IDE, no copying into a console, no waiting. The moment a concept is introduced, students can break it, fix it, and make it their own.

The later modules go further, with a full CodeMirror editor built into the slides — syntax highlighting, keyboard shortcuts, auto-format, and a status bar. The API module runs actual live network requests against real public endpoints. The Node.js module walks through building a complete REST API step by step, with each slide showing a working version of the server students can copy and run locally.

The feedback loop that usually takes minutes — read, switch apps, type, run, come back — happens in seconds, inside the lecture itself.

---

## Modules

| | Module | Slides | Live Playgrounds |
|---|--------|:------:|:----------------:|
| 🌐 | Client-Server Architecture | 17 | — |
| ⚡ | JavaScript Part 1 — syntax, types, functions | 15 | 12 |
| 🧩 | JavaScript Part 2 — objects, arrays, ES6 | 16 | 13 |
| 💲 | jQuery — DOM, events, animations | 19 | 17 |
| 🔌 | APIs & Async JS — AJAX, Fetch, Axios, async/await | 27 | 24 |
| 🖥️ | Node.js — build a REST API live | 17 | 15 |

---

## Running locally

```bash
git clone https://github.com/Shohan29531/hcdd411.git
cd hcdd411
open javascript-syntax/js-syntax-1.html
```

Every slide deck is a standalone HTML file. No build step, no dependencies, no server required — just open and go.

---

*Md Touhidul Islam · Penn State University*