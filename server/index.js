// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.put("/increase", (req, res) => {
  var counter = parseInt(req.cookies.counter) || 0;
  counter = counter + 1;
  res.cookie('counter', counter);
  res.json({ success: true });
});

app.put("/decrease", (req, res) => {
  var counter = parseInt(req.cookies.counter) || 0;
  counter = counter - 1;
  res.cookie('counter', counter);
  res.json({ success: true });
});

app.put("/restart", (req, res) => {
  var counter = 0;
  res.cookie('counter', counter);
  res.json({ success: true });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
