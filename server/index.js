const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());

app.use(
  cors({
    origin: "*", 
  })
);


app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Mock user (same as your frontend demo)
  const user = {
    email: "net@flix.com",
    password: "123456@",
  };

  if (email === user.email && password === user.password) {
    return res.json({
      success: true,
      user: { email },
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

// 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});