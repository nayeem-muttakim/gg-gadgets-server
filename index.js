const express = require("express");

const app = express();
const port = process.env.PORT || 8955;

app.get("/", (req, res) => {
  res.send("Hi Mentor");
});

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
