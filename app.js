const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.static("./public"));
app.use(express.static("/public/products"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Middleware
//Import routes
const pagesRoute = require("./routes/pages");
app.use("/menji", pagesRoute);

//Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(3000);
