const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDB() {
    await mongoose.connect(`${process.env.DB_URL}/Post_Details`);
    console.log("Connected to Database");
}
module.exports = connectDB;