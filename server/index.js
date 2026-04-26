const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const mockUser = {
  email: "net@flix.com",
  password: "123456@",
};

// Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === mockUser.email && password === mockUser.password) {
    return res.json({ success: true });
  }

  return res.json({ success: false });
});

module.exports = app;