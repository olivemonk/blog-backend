const Blog = require("../models/Blog");


const getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find();
        if(!blogs){
            return res.status(200).json({message: "No blogs found"});
        } else {
            return res.status(200).json({blogs});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        throw new Error(error)
    }
}

module.exports = {getAllBlogs}