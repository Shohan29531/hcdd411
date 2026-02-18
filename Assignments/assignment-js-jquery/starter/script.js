/* 
You will implement the TODOs. Do not change the GIVEN sections.
*/

/* GIVEN (DO NOT EDIT): */
function setMsg($el, text, kind) {
  $el.removeClass("good warn bad").addClass(kind || "");
  $el.text(text);
}

/* 
GIVEN (DO NOT EDIT):
This function creates the exact <li> HTML that we want.
This is Used later.
*/
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

/* TODO #1 (15 pts):
   normalizeText(text):
   - trim spaces
   - convert multiple spaces to one
*/
function normalizeText(text) {
  // TODO
}




/* TODO #2 (10 pts):
   isDuplicate(itemsArr, newText):
   - return true if any existing item.text matches newText (case-insensitive)
*/
function isDuplicate(itemsArr, newText) {
  // TODO
}




// TODO 3 (25 pts): renderList(): updates the list when needed
function renderList() {
  var $list = $("#itemsList");
  $list.empty();

  var doneCount = 0;

  for (var i = 0; i < items.length; i++) {
    var it = items[i];

    // TODO: count done items
    // if (it.done) { ... }

    // GIVEN: build the <li> HTML using makeLiHtml(it)
    var liHtml = makeLiHtml(it);

    // TODO: append liHtml to the list using jQuery
    // $list.append(...);
  }

  // TODO: update counters
  // $("#listCount").text(...);
  // $("#doneCount").text(...);

  // GIVEN: Optional message (recommended)
  if (items.length === 0) {
    setMsg($("#listMsg"), "List is empty. Add an item to get started.", "warn");
  } else {
    setMsg($("#listMsg"), "", "");
  }
}






// TODO 4 (15 pts): addItemFromUI(): renders the list in UI
function addItemFromUI() {
  // GIVEN: read from UI
  var rawText = $("#itemText").val();
  var type = $("#itemType").val(); // "normal" or "important"
  var text = normalizeText(rawText);

  // GIVEN: validation (empty)
  if (!text) {
    setMsg($("#listMsg"), "Please enter an item text.", "bad");
    $("#itemText").focus();
    return;
  }

  // GIVEN: validation (duplicate)
  if (isDuplicate(items, text)) {
    setMsg($("#listMsg"), "Duplicate item. Please enter a different item.", "warn");
    $("#itemText").val("").focus();
    return;
  }

  // TODO: create a new object like:
  // { id: nextId, text: text, type: type, done: false }
  // then push into items, and increment nextId

  // GIVEN
  setMsg($("#listMsg"), "Added: " + text, "good");
  $("#itemText").val("").focus();
  renderList();
}




/* TODO #5 (5 pts):
   toggleDoneById(id): flip done boolean for matching item
*/
function toggleDoneById(id) {
  // TODO
}




/* TODO #6 (5 pts):
   removeDoneItems(): remove all items with done === true
*/
function removeDoneItems() {
  // TODO
}




/* TODO #7 (5 pts):
   clearAllItems(): empty items and reset nextId
*/
function clearAllItems() {
  // TODO
}




/* TODO #8 (20 pts):
   Put all wiring inside $(function(){ ... })
*/

$(function () {
 //- GIVEN: #addItemBtn click -> addItemFromUI()
  $("#addItemBtn").click(function () {
    addItemFromUI();
  });

  // TODO:    - #removeDoneBtn click -> removeDoneItems(); renderList();

  // TODO: - #clearAllBtn click -> clearAllItems(); renderList();

  // GIVEN: - Clicking any <li> inside #itemsList:
  $("#itemsList").on("click", "li", function () {
    var id = Number(this.getAttribute("data-id"));
    toggleDoneById(id);
    renderList();
  });

  // TODO: Call renderList() once at startup

});