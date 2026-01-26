const title = document.querySelector("h1");
title.textContent = "Updated by JavaScript";

document.body.insertAdjacentHTML(
  "beforeend",
  "<button id='btn'>Click me</button>"
);

document.querySelector("#btn").addEventListener("click", () => {
  alert("Button Pressed!");
});
