// app.solution.js
/* =========================================================
   HCDD 411 — API Assignment (Fetch + async/await)
   Students: ONLY edit this file (app.js).
   =========================================================

   Free API used: https://jsonplaceholder.typicode.com

   RULES:
   - Do NOT change index.html or styles.css
   - Complete EXACTLY the 4 tasks below (no extra features)
   - Event wiring is ALREADY done in index.html (onclick / onchange / onsubmit).
     You only implement the functions: onLoadUsers, onUserChange, onPostChange, onCreatePost.

   Helpful hint from class:
   - Fetch does NOT automatically throw for 404/500
   - Best practice: if (!response.ok) throw new Error("HTTP " + response.status)

   ---------------------------------------------------------
   TASK 1 (easy):
   When the “Load Users” button is clicked:
   - Fetch all users from /users
   - Populate the user dropdown with user names
   - Enable the user dropdown

   TASK 2 (easy):
   When the user dropdown changes:
   - Fetch posts for that user from /posts?userId=...
   - Populate the post dropdown with post titles
   - Enable the post dropdown

   TASK 3 (easy):
   When the post dropdown changes:
   - Fetch comments for that post from /comments?postId=...
   - Render the comments (name, email, body)
   - Update the “X comments” pill

   TASK 4 (easy):
   When the Create Post form is submitted:
   - Send a POST request to /posts with { title, body, userId }
   - Print the response JSON in the Output panel
   (Note: JSONPlaceholder fakes creation but returns a realistic response.)
   ========================================================= */

// ====== DOM (already wired — do not rename ids in HTML) ======
const btnLoadUsers = document.getElementById("btnLoadUsers");
const userSelect = document.getElementById("userSelect");
const postSelect = document.getElementById("postSelect");

const userMeta = document.getElementById("userMeta");
const postMeta = document.getElementById("postMeta");

const commentsWrap = document.getElementById("comments");
const commentsCount = document.getElementById("commentsCount");

const form = document.getElementById("createPostForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const btnClearOutput = document.getElementById("btnClearOutput");
const output = document.getElementById("output");

const statusEl = document.getElementById("status");
const statusText = statusEl.querySelector(".status-text");
const statusDot = statusEl.querySelector(".dot");

// ====== API base ======
const BASE_URL = "https://jsonplaceholder.typicode.com";

// ====== small helpers (you may use these) ======
function setStatus(message, kind = "info") {
  statusText.textContent = message;

  // kind: "info" | "success" | "error"
  if (kind === "success") {
    statusEl.style.background = "rgba(5,150,105,0.10)";
    statusEl.style.borderColor = "rgba(5,150,105,0.25)";
    statusEl.style.color = "#059669";
    statusDot.style.background = "#059669";
  } else if (kind === "error") {
    statusEl.style.background = "rgba(220,38,38,0.10)";
    statusEl.style.borderColor = "rgba(220,38,38,0.25)";
    statusEl.style.color = "#DC2626";
    statusDot.style.background = "#DC2626";
  } else {
    statusEl.style.background = "rgba(59,125,214,0.10)";
    statusEl.style.borderColor = "rgba(59,125,214,0.25)";
    statusEl.style.color = "#3B7DD6";
    statusDot.style.background = "#3B7DD6";
  }
}

function setOutput(objOrText) {
  if (typeof objOrText === "string") {
    output.textContent = objOrText;
    return;
  }
  output.textContent = JSON.stringify(objOrText, null, 2);
}

function resetPostUI() {
  postSelect.innerHTML = '<option value="">(select a user first)</option>';
  postSelect.disabled = true;
  postMeta.textContent = "Pick a post to load its comments.";

  commentsWrap.classList.add("empty");
  commentsWrap.innerHTML =
    '<p class="muted">No comments yet. Choose a user → choose a post.</p>';
  commentsCount.textContent = "0 comments";
}

function resetAllUI() {
  userSelect.innerHTML = '<option value="">(users not loaded yet)</option>';
  userSelect.disabled = true;
  userMeta.textContent = "Pick a user to load their posts.";
  resetPostUI();
}

async function fetchJson(url, options) {
  const res = await fetch(url, options);

  // Best practice from class: turn HTTP failures into real JS errors
  if (!res.ok) {
    throw new Error("HTTP " + res.status + " for " + url);
  }

  return res.json();
}

// Render helpers (already done)
function renderUsers(users) {
  userSelect.innerHTML = '<option value="">(choose a user)</option>';
  for (const u of users) {
    const opt = document.createElement("option");
    opt.value = String(u.id);
    opt.textContent = u.name;
    userSelect.appendChild(opt);
  }
}

function renderPosts(posts) {
  postSelect.innerHTML = '<option value="">(choose a post)</option>';
  for (const p of posts) {
    const opt = document.createElement("option");
    opt.value = String(p.id);
    opt.textContent = p.title;
    postSelect.appendChild(opt);
  }
}

function renderComments(comments) {
  if (comments.length === 0) {
    commentsWrap.classList.add("empty");
    commentsWrap.innerHTML = '<p class="muted">No comments for this post.</p>';
    commentsCount.textContent = "0 comments";
    return;
  }

  commentsWrap.classList.remove("empty");
  commentsWrap.innerHTML = "";

  for (const c of comments) {
    const card = document.createElement("div");
    card.className = "comment";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = c.name;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = c.email;

    const body = document.createElement("div");
    body.className = "body";
    body.textContent = c.body;

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(body);

    commentsWrap.appendChild(card);
  }

  commentsCount.textContent = comments.length + " comments";
}

// ====== initial state ======
resetAllUI();
setOutput("(nothing yet)");

// =========================================================
// TASKS: write your code below
// =========================================================

/* =========================
   TASK 1: Load Users
   ========================= */

// TODO: Implement onLoadUsers().
// This function runs when the “Load Users” button is clicked.

async function onLoadUsers() {
  // TODO (Task 1):
  // - setStatus("Loading users...");
  // - call fetchJson(BASE_URL + "/users")
  // - renderUsers(users)
  // - enable userSelect (userSelect.disabled = false)
  // - setStatus("Users loaded ✅", "success")
  // - also call resetPostUI() because we’re starting fresh

  try {
    setStatus("Loading users...");
    resetPostUI();

    const users = await fetchJson(BASE_URL + "/users");
    renderUsers(users);

    userSelect.disabled = false;
    userMeta.textContent = "Users loaded. Pick a user to load their posts.";

    setStatus("Users loaded ✅", "success");
  } catch (err) {
    setStatus("Failed to load users: " + err.message, "error");
  }
}

/* =========================
   TASK 2: Load Posts for selected user
   ========================= */

// TODO: Implement onUserChange().
// This function runs when the user dropdown changes.

async function onUserChange() {
  // TODO (Task 2):
  // - resetPostUI()
  // - if no user selected, return
  // - setStatus("Loading posts...");
  // - call fetchJson(BASE_URL + "/posts?userId=" + userId)
  // - renderPosts(posts)
  // - enable postSelect (postSelect.disabled = false)
  // - setStatus("Posts loaded ✅", "success")

  resetPostUI();

  const userId = userSelect.value;
  if (!userId) {
    setStatus("Choose a user to load posts.");
    return;
  }

  try {
    setStatus("Loading posts...");

    const posts = await fetchJson(BASE_URL + "/posts?userId=" + userId);
    renderPosts(posts);

    postSelect.disabled = false;
    postMeta.textContent = "Posts loaded. Pick a post to load its comments.";

    setStatus("Posts loaded ✅", "success");
  } catch (err) {
    setStatus("Failed to load posts: " + err.message, "error");
  }
}

/* =========================
   TASK 3: Load Comments for selected post
   ========================= */

// TODO: Implement onPostChange().
// This function runs when the post dropdown changes.

async function onPostChange() {
  // TODO (Task 3):
  // - clear comments UI (you can call renderComments([]) OR just reset to empty message)
  // - if no post selected, return
  // - setStatus("Loading comments...");
  // - call fetchJson(BASE_URL + "/comments?postId=" + postId)
  // - renderComments(comments)
  // - setStatus("Comments loaded ✅", "success")

  // clear comments UI quickly
  commentsWrap.classList.add("empty");
  commentsWrap.innerHTML = '<p class="muted">Loading...</p>';
  commentsCount.textContent = "0 comments";

  const postId = postSelect.value;
  if (!postId) {
    commentsWrap.innerHTML = '<p class="muted">No comments yet. Choose a post.</p>';
    setStatus("Choose a post to load comments.");
    return;
  }

  try {
    setStatus("Loading comments...");

    const comments = await fetchJson(BASE_URL + "/comments?postId=" + postId);
    renderComments(comments);

    setStatus("Comments loaded ✅", "success");
  } catch (err) {
    commentsWrap.classList.add("empty");
    commentsWrap.innerHTML = '<p class="muted">Could not load comments.</p>';
    commentsCount.textContent = "0 comments";
    setStatus("Failed to load comments: " + err.message, "error");
  }
}

/* =========================
   TASK 4: Create a Post (POST)
   ========================= */

// TODO: Implement onCreatePost(event).
// This function runs when the form is submitted.
// IMPORTANT: It must return false to stop the page refresh.

async function onCreatePost(event) {
  // TODO (Task 4):
  // - prevent default (event.preventDefault())
  // - read title/body from inputs
  // - pick a userId:
  //   - if userSelect has a value, use that
  //   - otherwise use 1
  // - setStatus("Creating post...");
  // - call fetchJson(BASE_URL + "/posts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, body, userId }) })
  // - setOutput(responseJson)
  // - setStatus("Post created ✅", "success")

  event.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  // HTML already has required fields, but we still guard here.
  if (!title || !body) {
    setStatus("Please fill in Title and Body.", "error");
    return false;
  }

  const userId = userSelect.value ? Number(userSelect.value) : 1;

  try {
    setStatus("Creating post...");

    const created = await fetchJson(BASE_URL + "/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId }),
    });

    setOutput(created);
    setStatus("Post created ✅", "success");
  } catch (err) {
    setStatus("Failed to create post: " + err.message, "error");
  }

  return false; // keep this
}

// (already done) Clear output button (wired from HTML)
function onClearOutput() {
  setOutput("(nothing yet)");
}