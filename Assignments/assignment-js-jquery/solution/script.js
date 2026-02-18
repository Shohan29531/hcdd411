/* 
HCDD 411 — Mini Assignment (Instructor Solution)
Task: Smart List Manager
*/

function setMsg($el, text, kind) {
  $el.removeClass("good warn bad").addClass(kind || "");
  $el.text(text);
}

/* GIVEN STYLE: use provided HTML builder */
function makeLiHtml(it) {
  var badgeText = (it.type === "important") ? "Important" : "Normal";
  var liClass = it.done ? "done" : "";
  var badgeClass = (it.type === "important") ? "important" : "";

  return (
    '<li class="' + liClass + '" data-id="' + it.id + '">' +
      '<span>' + it.text + '</span>' +
      '<span class="badge ' + badgeClass + '">' + badgeText + '</span>' +
    '</li>'
  );
}

var items = [];
var nextId = 1;

function normalizeText(text) {
  return String(text || "").trim().replace(/\s+/g, " ");
}

function isDuplicate(itemsArr, newText) {
  var target = normalizeText(newText).toLowerCase();
  for (var i = 0; i < itemsArr.length; i++) {
    if (normalizeText(itemsArr[i].text).toLowerCase() === target) {
      return true;
    }
  }
  return false;
}

function renderList() {
  var $list = $("#itemsList");
  $list.empty();

  var doneCount = 0;

  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    if (it.done) doneCount++;

    $list.append(makeLiHtml(it));
  }

  $("#listCount").text(items.length + " items");
  $("#doneCount").text(doneCount + " done");

  if (items.length === 0) {
    setMsg($("#listMsg"), "List is empty. Add an item to get started.", "warn");
  } else {
    setMsg($("#listMsg"), "", "");
  }
}

function addItemFromUI() {
  var rawText = $("#itemText").val();
  var type = $("#itemType").val();
  var text = normalizeText(rawText);

  if (!text) {
    setMsg($("#listMsg"), "Please enter an item text.", "bad");
    $("#itemText").focus();
    return;
  }

  if (isDuplicate(items, text)) {
    setMsg($("#listMsg"), "Duplicate item. Please enter a different item.", "warn");
    $("#itemText").val("").focus();
    return;
  }

  var newItem = {
    id: nextId,
    text: text,
    type: (type === "important") ? "important" : "normal",
    done: false
  };

  items.push(newItem);
  nextId++;

  setMsg($("#listMsg"), "Added: " + text, "good");
  $("#itemText").val("").focus();
  renderList();
}

function toggleDoneById(id) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items[i].done = !items[i].done;
      return;
    }
  }
}

function removeDoneItems() {
  var kept = [];
  for (var i = 0; i < items.length; i++) {
    if (!items[i].done) kept.push(items[i]);
  }
  items = kept;
}

function clearAllItems() {
  items = [];
  nextId = 1;
}

$(function () {
  $("#addItemBtn").click(function () {
    addItemFromUI();
  });

  $("#removeDoneBtn").click(function () {
    removeDoneItems();
    setMsg($("#listMsg"), "Removed all done items.", "good");
    renderList();
  });

  $("#clearAllBtn").click(function () {
    clearAllItems();
    setMsg($("#listMsg"), "Cleared all items.", "good");
    renderList();
  });

  $("#itemsList").on("click", "li", function () {
    var id = Number(this.getAttribute("data-id"));
    toggleDoneById(id);
    renderList();
  });

  renderList();
});
