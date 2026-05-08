const path = require("path");
const express   = require("express");
const connectDB = require("./config/database");
const Student   = require("./models/students.model");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public1")));


// ── GET /students ── return all students ──────────────────────
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ name: 1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /students/:id ── return one student by ID ─────────────
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── POST /students ── create a new student ────────────────────
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PUT /students/:id ── update a student by ID ───────────────
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!student) return res.status(404).json({ error: "Not found" });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── DELETE /students/:id ── delete a student by ID ───────────
app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

async function startServer() {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

startServer();
