const express = require("express");
const login = express.Router();

login.post("/login", function (req, res) {
  const { username, password } = req.body;
  // const username = req.body.username;

  if (username === "tungnt@softech.vn" && password === "123456789") {
    res.json({
      user: {
        id: 1,
        email: "tungnt@softech.vn",
        username: "tungnt",
        firstName: "Tony",
        lastName: "Woo",
        isActive: true,
      },
      access_token: "...",
    });
    return;
  }
  res.status(401).json({
    statusCode: 401,
    message: "Unauthorized",
  });
});
module.exports = login;
