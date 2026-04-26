const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock login credentials
const mockUser = {
  email: "net@flix.com",
  password: "123456@",
};


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === mockUser.email && password === mockUser.password) {
    return res.json({ success: true });
  }

  return res.json({ success: false });
});

app.listen(3000, () => {
  console.log("Server running on port 5000");
});