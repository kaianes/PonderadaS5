import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(3030, () => {
  console.log("Server is running on: http://localhost:3030");
});

