const mongoose = require("mongoose");
const uri =
  "mongodb+srv://ok081002:omsack0800@cluster0.pxxvutd.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;
