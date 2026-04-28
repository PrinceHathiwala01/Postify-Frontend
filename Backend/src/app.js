const express = require("express");
const app = express();
const postModel = require("./models/post.models");
const multer = require("multer");
const uploadImage = require("./services/storage.service");
const cors = require("cors");
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());//This middleware is used to parse the json data
app.use(cors());//This middleware is used to allow cross origin requests

//This part is for uploading the image to the server and then storing the url in the database
app.post("/create-post", upload.single("image"), async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    const result = await uploadImage(req.file.buffer);
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    });
    return res.status(201).json({
        message: "Post created successfully",
        post
    });
});

//This part is for fetching the data from the database
app.get("/posts", async (req, res) => {
    const post = await postModel.find();
    return res.status(200).json({
        message: "Posts fetched successfully",
        post
    })
})

/*//Simple way to send data to the server by using postman and REST Api
app.post("/post", async (req, res) => {
    const data = req.body;
    await postModel.create({
        image: data.image,
        caption:data.caption
    })
    res.status(201).json({
        message:"Post created successfully",
    })
})
*/

module.exports = app;