const express = require('express');
const { getAllBlogs, addBlog, updateBlog, deleteBlog, getBlog } = require('../controllers/blogContollers');

const blogRouter = express.Router();


blogRouter.get('/',getAllBlogs).post('/add',addBlog).put('/update/:id',updateBlog).delete('/delete/:id',deleteBlog).get('/get/:id',getBlog);


module.exports = blogRouter;