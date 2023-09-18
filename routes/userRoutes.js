const express = require('express');
const { getAllUsers, signupUser, loginUser } = require('../controllers/userControllers');
const router = express.Router();


router.get('/',getAllUsers).post('/signup',signupUser).post('/login',loginUser);

module.exports = router;