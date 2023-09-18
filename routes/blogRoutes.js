const express = require('express');
const { getAllBlogs } = require('../controllers/blogContollers');

const blogRouter = express.Router();


blogRouter.get('/',getAllBlogs);


module.exports = blogRouter;