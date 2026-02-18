/* ======================================================
   Practice Pack (8 Problems) - Instructor Solutions
   Notes:
   - Practice 3 & 4 require the corresponding HTML elements to exist on the page.
   - Practice 7 requires Axios to be loaded (e.g., <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>).
====================================================== */

/* ======================================================
   PRACTICE 1 (JS)
====================================================== */
// PRACTICE 1 (JS)
const nums = [12, 7, 20, 5, 13];

let sum = 0;        // TODO: compute sum
let max = nums[0];  // TODO: compute max

// TODO: loop through nums and update sum + max
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (nums[i] > max) max = nums[i];
}

const avg = sum / nums.length; // TODO: avg should use your real sum

console.log("Sum:", sum);
console.log("Avg:", avg.toFixed(2));
console.log("Max:", max);


/* ======================================================
   PRACTICE 2 (JS)
====================================================== */
// PRACTICE 2 (JS)
const users = [
  { name: "Sam", active: true },
  { name: "Lina", active: false },
  { name: "Ari", active: true }
];

// TODO: create activeNames using filter + map
const activeNames = users
  .filter(function (u) { return u.active; })
  .map(function (u) { return u.name; });

console.log(activeNames);


/* ======================================================
   PRACTICE 3 (jQuery)
====================================================== */
// PRACTICE 3 (jQuery)
$(function () {
  // TODO: Set the status text
  $("#jq1-status").text("Status: Ready!");

  // TODO: Add class "highlight" to all .tag elements
  $(".tag").addClass("highlight");

});


/* ======================================================
   PRACTICE 4 (jQuery)
====================================================== */
// PRACTICE 4 (jQuery)
$(function () {
  $("#jq2-addBtn").on("click", function () {
    const text = $("#jq2-text").val().trim();

    // TODO: if text is empty -> show "Type something" in #jq2-msg
    if (!text) {
      $("#jq2-msg").text("Type something");
      return;
    }

    // TODO: else -> append <li>text</li> to #jq2-list
    // TODO: clear input and clear message
    $("#jq2-list").append("<li>" + text + "</li>");
    $("#jq2-text").val("");
    $("#jq2-msg").text("");

  });
});


/* ======================================================
   PRACTICE 5 (fetch + .then)
====================================================== */
// PRACTICE 5 (fetch + .then)
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    // TODO: return res.json();
    return res.json();
  })
  .then((user) => {
    if (!user) {
      console.warn("TODO: You forgot to return res.json() in the first .then()!");
      return;
    }

    // TODO: Log Name and Email
    // console.log("Name:", user.name);
    // console.log("Email:", user.email);
    console.log("Name:", user.name);
    console.log("Email:", user.email);
  })
  .catch((err) => {
    console.error("Fetch failed:", err.message);
  });


/* ======================================================
   PRACTICE 6 (async/await + fetch)
====================================================== */
// PRACTICE 6 (async/await + fetch)
async function getPostsForUser2() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=2";

    let posts = null; // TODO: set this to the parsed JSON array

    // TODO: fetch the url
    const res = await fetch(url);

    // TODO: parse JSON and assign to posts
    posts = await res.json();

    // Guard so starter code doesn't crash before you finish.
    if (!Array.isArray(posts)) {
      console.warn("TODO: Set 'posts' to the parsed JSON array (await res.json()).");
      return;
    }

    console.log("Total posts:", posts.length);
    console.log("First title:", posts[0]?.title);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

getPostsForUser2();


/* ======================================================
   PRACTICE 7 (axios.post)
====================================================== */
// PRACTICE 7 (axios.post)
async function createPost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    let response; // TODO: assign this using axios.post(...)

    // TODO: call axios.post(url, { title: "...", body: "...", userId: 1 })
    response = await axios.post(url, {
      title: "My New Post",
      body: "This is the content.",
      userId: 1
    });

    if (!response) {
      console.warn("TODO: Call axios.post(...) and store the result in 'response'.");
      return;
    }

    console.log("Created id:", response.data.id);
    console.log("Title:", response.data.title);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

createPost();


/* ======================================================
   PRACTICE 8 ($.ajax)
====================================================== */
// PRACTICE 8 ($.ajax)
$.ajax({
  url: "https://jsonplaceholder.typicode.com/comments?postId=1",
  method: "GET",
  success: function (comments) {
    // TODO: log total comments
    // TODO: log first comment email
    // console.log("Total:", comments.length);
    // console.log("First email:", comments[0].email);
    console.log("Total:", comments.length);
    console.log("First email:", comments[0].email);
  },
  error: function (xhr) {
    console.error("Request failed:", xhr.status);
  }
});
