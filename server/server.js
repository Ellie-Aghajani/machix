const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is up and running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is listenning on port ${PORT}`);
});
