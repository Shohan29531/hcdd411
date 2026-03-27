const express = require("express");
const cors = require("cors");     // npm install cors
const morgan = require("morgan"); // npm install morgan

const app = express();
const PORT = 3000;

app.use(morgan("dev")); // log: GET /items 200 3ms
app.use(cors());         // allow cross-origin requests

app.get("/items", (req, res) => {
  res.json([{ id: 1, name: "Mouse" }]);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});