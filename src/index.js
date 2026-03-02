const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD working!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;