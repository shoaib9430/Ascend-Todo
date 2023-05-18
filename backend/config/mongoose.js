const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(`mongodb+srv://adarshsingh8008:adarshsingh8008@cluster0.g1irnke.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;