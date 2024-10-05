const mongoose = require("mongoose");

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
  }
}

module.exports = connectdb;
