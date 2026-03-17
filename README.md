# HCDD 411 — Interactive Web Technologies Course
### Penn State University · Md Touhidul Islam

> **A fully interactive, AI-assisted web course where slides are living codebooks — students don't just read about JavaScript, jQuery, APIs, and Node.js; they run it right inside the lecture.**

---

## 🌐 [▶ Live Interactive Demos →](https://shohan29531.github.io/hcdd411)

Browse and run real code from the slides directly in your browser — no install needed.

---

## What Makes This Course Different

Most web development courses separate slides from practice. Here, **the slides are the practice environment**. Every lecture file is a self-contained, browser-runnable HTML presentation with:

- **Embedded code editors** — editable textareas pre-loaded with real examples
- **Run Code buttons** — `eval()`-powered live execution with captured `console.log` output displayed inline
- **CodeMirror IDE integration** — syntax highlighting, `Tab` indentation, `Ctrl+Enter` to run, `Ctrl+/` to comment
- **Dark / Light theme toggle** — persistent across slides
- **Animated slide transitions** — cubic-bezier spring animations between all slides
- **Slide indicator** — live `current / total` counter with keyboard navigation (← →)
- **Practice problems embedded at the end of every lecture** — students solve challenges without leaving the slide deck

No projector, no copy-paste, no switching windows. The whole loop — explain, demonstrate, experiment — happens on a single scrolling page.

---

## 📁 Repository Structure

```
hcdd411/
│
├── Class Slides/                    # PowerPoint source decks
│   ├── HCDD 411 Introduction.pptx
│   ├── HCDD_411_JavaScript_Part_1.pptx
│   └── client-server-architecture.pptx
│
├── javascript-syntax/               # JS Part 1 & Part 2 interactive slides
│   ├── js-syntax-1.html             # 15-slide deck: variables, types, operators, functions
│   ├── js-syntax-2.html             # 16-slide deck: objects, arrays, ES6, classes
│   ├── js-practice.html             # In-class practice problems
│   └── js-practice-solutions.txt   # Instructor solutions
│
├── jquery/                          # jQuery interactive slides
│   ├── jquery.html                  # 19-slide deck: selectors, DOM, events, AJAX, animations
│   ├── jquery-practice.html         # In-class practice problems
│   ├── jquery-practice-solutions.txt
│   └── in-class-problem-solutions.txt
│
├── API/                             # API & async slides
│   ├── api.html                     # 27-slide deck: AJAX, jQuery $.ajax, Fetch, Axios, async/await
│   ├── api-part-1.html
│   ├── api-part-2.html
│   ├── api-practice.html            # In-class exercises
│   ├── practice-problems.html
│   └── api-practice-solutions.txt
│
├── client-server/                   # Client-server architecture slides
│   └── client-server.html           # Conceptual deck: HTTP, REST, databases, APIs
│
├── nodejs/                          # Node.js & Express slides + server examples
│   ├── build-backend-nodejs.html    # 17-slide step-by-step backend build
│   ├── NodeJS_Fundamentals - Part 1.pptx
│   ├── NodeJS_Fundamentals - Part 2.pptx
│   ├── NodeJS_Fundamentals - Part 3.pptx
│   ├── Express_Fundamentals.pptx
│   ├── server.mjs                   # Demo Express server
│   ├── notes-server.mjs             # Full CRUD notes API
│   └── backend-notes/               # Complete notes REST API project
│       └── src/server.mjs
│
├── js101/                           # Minimal JS demo scaffold
│   ├── index.html
│   └── app.js
│
└── Assignments/
    ├── assignment-javascript/        # JS fundamentals assignment
    │   ├── js-assignment-starter/   # Student starter files
    │   └── solution/                # Full solution + instructor notes
    └── assignment-js-jquery/        # jQuery assignment
        ├── starter/
        └── solution/
```

---

## 📚 Lecture Modules

### 1. Client-Server Architecture
`client-server/client-server.html` — Conceptual foundation lecture covering:
- Evolution from standalone apps to networked computing
- The Client-Server model and its three components (client, network, server)
- Static vs. dynamic content
- Databases as application memory
- Introduction to APIs and REST

---

### 2. JavaScript Part 1 — Syntax & Fundamentals
`javascript-syntax/js-syntax-1.html` — **15 interactive slides**

| Slide | Topic | Has Playground? |
|-------|-------|----------------|
| 1 | Course intro + dev environment setup | — |
| 2 | Why JavaScript? Where code lives | — |
| 3 | Developer Tools & browser console | ✅ |
| 4 | JavaScript statements & semicolons | ✅ |
| 5 | Comments | ✅ |
| 6 | Variables: `var`, `let`, `const` | ✅ |
| 7 | Data types & `typeof` | ✅ |
| 8 | Type conversion | ✅ |
| 9 | Operators (arithmetic, string, comparison) | ✅ |
| 10 | Control flow: `if/else`, `for`, `while` | ✅ |
| 11 | Functions (declaration, expression, scope) | ✅ |
| 12–15 | Practice Problems 1–3 | ✅ |

---

### 3. JavaScript Part 2 — Objects, Arrays & ES6
`javascript-syntax/js-syntax-2.html` — **16 interactive slides**

| Slide | Topic | Has Playground? |
|-------|-------|----------------|
| 1–2 | Review + what you'll learn | — |
| 3–4 | JavaScript objects + manipulating properties | ✅ |
| 5 | JavaScript arrays | ✅ |
| 6–11 | Array methods: `forEach`, `map`, `filter`, `every`, `some` | ✅ |
| 12 | ES6 classes | ✅ |
| 13 | ES6 arrow functions | ✅ |
| 14–16 | Practice Problems 1–3 | ✅ |

---

### 4. jQuery
`jquery/jquery.html` — **19 interactive slides**

| Slide | Topic | Has Playground? |
|-------|-------|----------------|
| 1 | Introduction: why jQuery still matters | — |
| 2–3 | HTML + CSS quick review / "The Verbose JS problem" | ✅ |
| 4 | What is jQuery? History & rise/fall | — |
| 5–6 | Including jQuery; `$` vs `jQuery` | ✅ |
| 7 | Selectors (CSS-style, attribute, pseudo) | ✅ |
| 8 | DOM manipulation — content: `.html()`, `.text()`, `.val()` | ✅ |
| 9 | DOM manipulation — styling: `.css()`, `.addClass()`, `.toggleClass()` | ✅ |
| 10 | DOM manipulation — elements: `.append()`, `.remove()`, `.clone()` | ✅ |
| 11–12 | Practice: Selectors + Content & Elements | ✅ |
| 13 | Event handling: `.on()`, `.click()`, `.hover()` | ✅ |
| 14 | DOM traversal: `.parent()`, `.children()`, `.find()` | ✅ |
| 15 | Animations: `.show()`, `.fadeIn()`, `.slideToggle()`, `.animate()` | ✅ |
| 16 | jQuery vs. modern JS comparison | ✅ split-editor |
| 17 | Document Ready | ✅ |
| 18–19 | Final Practice: Events & Mini Feature Build | ✅ |

---

### 5. APIs & Async JavaScript
`API/api.html` — **27 interactive slides** (the most comprehensive module)

| Slides | Topic | Has Playground? |
|--------|-------|----------------|
| 1–3 | What are APIs? Web app structure, client↔backend communication | — |
| 4 | API key components (URL, method, headers, body, response) | ✅ |
| 5–6 | XML vs JSON; JSON object vs JSON string | ✅ |
| 7 | Data exchange techniques overview | — |
| 8 | AJAX concept (Asynchronous JS and XML) | ✅ |
| 9–12 | jQuery AJAX: syntax, GET, POST, PUT | ✅ |
| 13–14 | Practice #1 & #2 — jQuery AJAX | ✅ |
| 15 | jQuery AJAX DELETE | ✅ |
| 16 | Promises: `.then()` and `.catch()` | ✅ |
| 17–18 | Axios: setup + code examples | ✅ |
| 19–20 | Fetch API: step-by-step + code examples | ✅ |
| 21–22 | `async`/`await` concept + usage | ✅ |
| 23–24 | AXIOS full example | ✅ |
| 25–26 | Fetch API full example | ✅ |
| 27 | Modern async/await approach | ✅ |
| 28 | Practice #3 & #4 — Fetch + Axios | ✅ |

---

### 6. Building a Backend with Node.js
`nodejs/build-backend-nodejs.html` — **17 step-by-step slides**

This lecture walks students through building a real REST API from zero, live-coding style. Each slide shows a version of the server file that students can copy-paste and run locally:

| Step | What Gets Built |
|------|----------------|
| 0 | Project folder structure |
| 1 | `package.json` + scripts |
| 2 | First Express server with `/health` route |
| 3 | Response helpers for consistent JSON |
| 4 | Reading request body for POST |
| 5 | JSON file as a "database" |
| 6 | Load + save notes from the JSON file |
| 7–10 | Full CRUD: `POST /notes`, `GET /notes/:id`, `PUT /notes/:id`, `DELETE /notes/:id` |
| 11 | Input validation |
| 12 | CORS setup for browser frontends |
| 13 | `curl` test suite |
| 14 | Mini in-class exercise |
| 15 | Final complete server code |

---

## 🛠️ Interactive Slide Technology

### Code Playgrounds
Every slide with a code example uses the same pattern:

```html
<div class="code-playground">
  <span class="playground-label">TRY IT: Practice Variables</span>
  <textarea class="code-editor" id="variables">
    // Pre-loaded example code
    let x = 10;
    console.log(x);
  </textarea>
  <button class="run-button" onclick="runCode('variables', 'variables-output')">
    Run Code
  </button>
  <div class="output-console" id="variables-output">
    <span class="output-label">Output:</span>
  </div>
</div>
```

The `runCode()` function intercepts `console.log` calls, executes the code with `eval()`, and renders output back into the `.output-console` element — all within the slide, with no backend server needed.

### CodeMirror IDE (API & Node.js slides)
The later, more complex slides upgrade to a full CodeMirror 5 editor with:
- **Syntax highlighting** (Dracula / Eclipse themes)
- **Keyboard shortcuts**: `Tab` → indent, `Ctrl+Enter` → run, `Ctrl+/` → toggle comment
- **Format button** — auto-formats messy code
- **Reset button** — restores the original example
- **Line/column indicator** in the status bar

### Slide Navigation
```js
// Keyboard + button navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
```

Slides animate in with a spring-eased `translateX` + `opacity` transition. The indicator always shows `current / total`.

### Theme System
A CSS custom-property theme system (`--primary`, `--code-bg`, `--text-primary`, etc.) powers both dark and light modes. A single `data-theme="light"` attribute on the root element toggles the whole presentation.

---

## 📝 Assignments

### Assignment 1: JavaScript Fundamentals
**Files:** `Assignments/assignment-javascript/`

Students receive a starter scaffold (`index.html` + `script.js` + `styles.css`) and implement:
- Variable declarations and type manipulation
- Control flow logic
- Function creation and scope
- Basic DOM interaction

A full solution and instructor rubric are included.

**Point distribution:** 15 / 20 / 25 / 40 across 4 tasks.

### Assignment 2: JavaScript + jQuery
**Files:** `Assignments/assignment-js-jquery/`

Students build on vanilla JS knowledge using jQuery to:
- Select and manipulate DOM elements
- Handle events (click, hover, form submit)
- Dynamically add and remove elements
- Apply animations

Starter and solution files included.

---

## 🔌 External APIs Used in Demos

All live API examples use free, public endpoints that require no key:

| API | Used For |
|-----|----------|
| `jsonplaceholder.typicode.com/users` | GET requests, response inspection |
| `jsonplaceholder.typicode.com/posts` | POST, PUT, DELETE demonstrations |
| JSONPlaceholder general | AJAX vs Fetch vs Axios comparisons |

---

## 🚀 Running the Materials Locally

```bash
# Clone the repository
git clone https://github.com/Shohan29531/hcdd411.git
cd hcdd411

# Open any HTML slide directly in your browser
open javascript-syntax/js-syntax-1.html
open jquery/jquery.html
open API/api.html

# For the Node.js backend demo:
cd nodejs/backend-notes
npm install
npm run dev        # starts server with auto-restart (nodemon)
# then open build-backend-nodejs.html to follow the slides
```

No build step, no bundler, no framework. Every frontend slide is a single `.html` file — open and go.

---

## 🧑‍🏫 Instructor Notes

- **Practice solutions** are kept in separate `.txt` files (`js-practice-solutions.txt`, `jquery-practice-solutions.txt`, etc.) so students can work problems without seeing answers in the same file
- **In-class solutions** are in their own files (`in-class-soln.txt`, `in-class-problem-solutions.txt`) for post-class distribution
- The **instructor README** inside the JS assignment solution folder (`solution/README-instructor.md`) documents the rubric and any revision history
- Slides are named with `Part 1 / Part 2` conventions and often have a `-old` or `-practice` variant to support different class pacing

---

## 🤖 AI-Assisted Course Design

This course was developed with AI assistance to:
- Generate polished, theme-consistent slide HTML from content outlines
- Design the code playground architecture (editor → eval → output capture)
- Produce practice problems with calibrated difficulty curves
- Create the CodeMirror IDE integration used in later modules
- Write consistent visual styling across all lecture files

The result is a level of visual polish and interactive depth that would ordinarily require a dedicated frontend team — achieved by one instructor, iteratively, with AI as a collaborator.

---

## 📌 Quick Reference

| Module | File | Slides | Live Playgrounds |
|--------|------|--------|-----------------|
| Client-Server Architecture | `client-server/client-server.html` | 17 | — |
| JavaScript Part 1 | `javascript-syntax/js-syntax-1.html` | 15 | 12 |
| JavaScript Part 2 | `javascript-syntax/js-syntax-2.html` | 16 | 13 |
| jQuery | `jquery/jquery.html` | 19 | 17 |
| APIs & Async JS | `API/api.html` | 27 | 24 |
| Node.js Backend | `nodejs/build-backend-nodejs.html` | 17 | 15 |
| **Total** | | **111** | **81** |

---

*HCDD 411 · Penn State University · Md Touhidul Islam*