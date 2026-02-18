/* SOLUTION (Instructor) — HCDD 411 JS Basics Assignment v4 */

function setText(id, text) { document.getElementById(id).textContent = text; }
function setMsg(id, text, kind) {
  var el = document.getElementById(id);
  el.className = "msg" + (kind ? (" " + kind) : "");
  el.textContent = text;
}
function money(n) { return "$" + n.toFixed(2); }

/* Task 1 */
var greetClicks = 0;
function makeGreeting(name) {
  if (name === "") { return ""; }
  return "Hello, " + name + "!";
}
function task1Greet() {
  var name = document.getElementById("nameInput").value;
  name = name.trim();
  var msg = makeGreeting(name);
  if (msg === "") { setText("greetMsg", "Please type your name."); return; }
  greetClicks = greetClicks + 1;
  setText("greetMsg", msg);
  setText("greetCount", String(greetClicks));
}

/* Task 2 */
function applyDiscount(price, type) {
  var rate = 0;
  if (type === "student") { rate = 0.10; }
  else if (type === "senior") { rate = 0.15; }
  else { rate = 0; }
  return price - (price * rate);
}
function categoryFromPrice(finalPrice) {
  if (finalPrice < 20) { return "Budget"; }
  else if (finalPrice < 100) { return "Regular"; }
  else { return "Premium"; }
}
function task2ComputeDiscount() {
  var raw = document.getElementById("priceInput").value;
  var type = document.getElementById("discountType").value;
  var price = parseFloat(raw);
  if (isNaN(price) || price <= 0) {
    setText("finalPrice", "—");
    setText("priceCategory", "—");
    setMsg("discountMsg", "Enter a valid price (> 0).", "bad");
    return;
  }
  var finalPrice = applyDiscount(price, type);
  var cat = categoryFromPrice(finalPrice);
  setText("finalPrice", money(finalPrice));
  setText("priceCategory", cat);
  setMsg("discountMsg", "Done.", "good");
}

/* Task 3 */
function isEven(n) { return (n % 2) === 0; }
function sumToN(n) {
  var sum = 0;
  var i;
  for (i = 1; i <= n; i = i + 1) {
    sum = sum + i;
  }
  return sum;
}
function task3Compute() {
  var raw = document.getElementById("nInput").value;
  var n = parseInt(raw, 10);
  if (isNaN(n) || n < 1 || n > 5000) {
    setText("evenOdd", "—");
    setText("sumResult", "—");
    setMsg("sumMsg", "Enter an integer N between 1 and 5000.", "bad");
    return;
  }
  var eo = isEven(n) ? "Even" : "Odd";
  var s = sumToN(n);
  setText("evenOdd", eo);
  setText("sumResult", String(s));
  setMsg("sumMsg", "Done.", "good");
}

/* Task 4 */
var oopItems = [];

class BaseItem {
  constructor(text) {
    this.text = text;
  }
  toHTML() {
    return "<li>" + this.text + "</li>";
  }
}

class ImportantItem extends BaseItem {
  constructor(text) {
    super(text);
  }
  toHTML() {
    return "<li class='important'>" + this.text + "</li>";
  }
}

function createItem(text, type) {
  if (type === "important") { return new ImportantItem(text); }
  return new BaseItem(text);
}

function addOopItem(arr, item) { arr.push(item); }

function removeLast(arr) {
  if (arr.length > 0) { arr.pop(); }
}

function clearAll(arr) {
  while (arr.length > 0) { arr.pop(); }
}

function renderOopItems(arr) {
  var html = "";
  var i;
  for (i = 0; i < arr.length; i = i + 1) {
    html = html + arr[i].toHTML();
  }
  document.getElementById("oopItemsList").innerHTML = html;
  setText("oopItemCount", String(arr.length) + " items");
}

function task4Add() {
  var text = document.getElementById("oopItemInput").value;
  text = text.trim();
  var type = document.getElementById("oopItemType").value;

  if (text === "") { setMsg("oopListMsg", "Type an item first.", "bad"); return; }

  var item = createItem(text, type);
  addOopItem(oopItems, item);

  document.getElementById("oopItemInput").value = "";
  setMsg("oopListMsg", "Added.", "good");
  renderOopItems(oopItems);
}

function task4RemoveLast() {
  if (oopItems.length === 0) { setMsg("oopListMsg", "Nothing to remove.", "warn"); return; }
  removeLast(oopItems);
  setMsg("oopListMsg", "Removed last.", "good");
  renderOopItems(oopItems);
}

function task4Clear() {
  if (oopItems.length === 0) { setMsg("oopListMsg", "Already empty.", "warn"); return; }
  clearAll(oopItems);
  setMsg("oopListMsg", "Cleared.", "good");
  renderOopItems(oopItems);
}

window.onload = function () {
  renderOopItems(oopItems);
};
