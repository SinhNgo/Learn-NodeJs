const express = require("express");

const login = require("./routes/auth");
const category = require("./routes/categories");

const app = express();

const port = 3000;
app.use(express.json());

// Middleware ("before Routes")
// const myLogger = function (req, res, next) {
//   console.log("LOGGED");
//   next();
// };

// app.use(myLogger);

// Routes
app.use("/auth", login);
app.use("/categories", category);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
