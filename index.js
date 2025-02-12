import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});