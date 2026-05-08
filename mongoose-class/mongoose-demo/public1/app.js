const studentsBody = document.getElementById("studentsBody");
const messageBox = document.getElementById("message");
const singleStudentBox = document.getElementById("singleStudentBox");
const refreshBtn = document.getElementById("refreshBtn");

const addForm = document.getElementById("addForm");
const getForm = document.getElementById("getForm");
const updateForm = document.getElementById("updateForm");
const deleteForm = document.getElementById("deleteForm");

const getStudentSelect = document.getElementById("getStudentSelect");
const updateStudentSelect = document.getElementById("updateStudentSelect");
const deleteStudentSelect = document.getElementById("deleteStudentSelect");

const updateName = document.getElementById("updateName");
const updateAge = document.getElementById("updateAge");
const updateMajor = document.getElementById("updateMajor");

let studentsCache = [];

function showMessage(text, type = "success") {
  messageBox.textContent = text;
  messageBox.className = `message ${type}`;
}

async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

function studentLabel(student) {
  return `${student.name} — Age ${student.age} — ${student.major || "Undeclared"}`;
}

function renderStudents(students) {
  if (students.length === 0) {
    studentsBody.innerHTML = `<tr><td colspan="3">No students in the database yet.</td></tr>`;
    return;
  }

  studentsBody.innerHTML = students.map(student => `
    <tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.major || "Undeclared"}</td>
    </tr>
  `).join("");
}

function setSelectOptions(selectElement, students, placeholder) {
  const currentValue = selectElement.value;

  selectElement.innerHTML = [
    `<option value="">${placeholder}</option>`,
    ...students.map(student => `
      <option value="${student._id}">${studentLabel(student)}</option>
    `)
  ].join("");

  if (students.some(student => student._id === currentValue)) {
    selectElement.value = currentValue;
  }
}

function populateStudentSelects(students) {
  setSelectOptions(getStudentSelect, students, "Select a student");
  setSelectOptions(updateStudentSelect, students, "Select a student");
  setSelectOptions(deleteStudentSelect, students, "Select a student");
}

function renderSingleStudent(student) {
  singleStudentBox.innerHTML = `
    <strong>${student.name}</strong><br>
    Age: ${student.age}<br>
    Major: ${student.major || "Undeclared"}
  `;
}

function fillUpdateForm(student) {
  updateName.value = student.name;
  updateAge.value = student.age;
  updateMajor.value = student.major || "";
}

async function loadStudents() {
  try {
    const students = await fetchJSON("/students");
    studentsCache = students;
    renderStudents(students);
    populateStudentSelects(students);
  } catch (error) {
    showMessage(error.message, "error");
  }
}

refreshBtn.addEventListener("click", loadStudents);

addForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    name: document.getElementById("addName").value.trim(),
    age: Number(document.getElementById("addAge").value),
    major: document.getElementById("addMajor").value.trim()
  };

  if (!payload.major) delete payload.major;

  try {
    const student = await fetchJSON("/students", {
      method: "POST",
      body: JSON.stringify(payload)
    });

    addForm.reset();
    renderSingleStudent(student);
    showMessage("Student added successfully.");
    await loadStudents();
    getStudentSelect.value = student._id;
    updateStudentSelect.value = student._id;
    deleteStudentSelect.value = student._id;
    fillUpdateForm(student);
  } catch (error) {
    showMessage(error.message, "error");
  }
});

getForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = getStudentSelect.value;
  if (!id) {
    showMessage("Choose a student first.", "error");
    return;
  }

  try {
    const student = await fetchJSON(`/students/${id}`);
    renderSingleStudent(student);
    showMessage("Student loaded.");
  } catch (error) {
    singleStudentBox.textContent = "No student loaded yet.";
    showMessage(error.message, "error");
  }
});

updateStudentSelect.addEventListener("change", () => {
  const id = updateStudentSelect.value;
  const student = studentsCache.find(item => item._id === id);

  if (!student) {
    updateName.value = "";
    updateAge.value = "";
    updateMajor.value = "";
    return;
  }

  fillUpdateForm(student);
  showMessage("Current values loaded into the update form.");
});

updateForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = updateStudentSelect.value;
  if (!id) {
    showMessage("Choose a student first.", "error");
    return;
  }

  const payload = {};
  const name = updateName.value.trim();
  const age = updateAge.value;
  const major = updateMajor.value.trim();

  if (name) payload.name = name;
  if (age !== "") payload.age = Number(age);
  if (major) payload.major = major;

  if (Object.keys(payload).length === 0) {
    showMessage("Enter at least one field to update.", "error");
    return;
  }

  try {
    const updated = await fetchJSON(`/students/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload)
    });

    renderSingleStudent(updated);
    showMessage("Student updated successfully.");
    await loadStudents();
    updateStudentSelect.value = updated._id;
    getStudentSelect.value = updated._id;
    deleteStudentSelect.value = updated._id;
    fillUpdateForm(updated);
  } catch (error) {
    showMessage(error.message, "error");
  }
});

deleteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = deleteStudentSelect.value;
  if (!id) {
    showMessage("Choose a student first.", "error");
    return;
  }

  try {
    await fetchJSON(`/students/${id}`, {
      method: "DELETE"
    });

    deleteForm.reset();
    getForm.reset();
    updateForm.reset();
    singleStudentBox.textContent = "No student loaded yet.";
    showMessage("Student deleted successfully.");
    await loadStudents();
  } catch (error) {
    showMessage(error.message, "error");
  }
});

loadStudents();