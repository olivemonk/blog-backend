const Blog = require("../models/Blog");

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find();
    if (!blogs) {
      return res.status(200).json({ message: "No blogs found" });
    } else {
      return res.status(200).json({ blogs });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    let existUser = await User.findById(user);
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    } else {
      let blog = new Blog({
        title,
        description,
        image,
        user,
      });
      await blog.save();
      if (blog) {
        existUser.blogs.push(blog);
        await existUser.save();
        return res
          .status(200)
          .json({ message: "Blog added successfully", blog: blog.title });
      } else {
        return res.status(500).json({ message: "Error adding blog" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const blog = await Blog.findByIdAndUpdate(id, { title, description });
    if (blog) {
        user = await User.findById(blog.user);
        user.blogs = user.blogs.map((blog) => {
            if(blog._id == id){
                blog.title = title;
                blog.description = description;
            }
            return blog;
        });
        await user.save();
      return res
        .status(200)
        .json({ message: "Blog updated successfully", blog });
    } else {
      return res.status(500).json({ message: "Error updating blog" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    if (blog) {
        user = await User.findById(blog.user);
        user.blogs = user.blogs.filter((blog) => blog._id != id);
        await user.save();
      return res
        .status(200)
        .json({ message: "Blog deleted successfully", blog });
    } else {
      return res.status(500).json({ message: "Error deleting blog" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) {
      return res.status(200).json({ message: "Blog found", blog });
    } else {
      return res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

module.exports = { getAllBlogs, addBlog, updateBlog, deleteBlog, getBlog };
