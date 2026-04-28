const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})
const postModel = mongoose.model("Post_Data", postSchema);
module.exports = postModel;