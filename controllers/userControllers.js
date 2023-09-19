const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (!users) {
      return res.status(200).json({ message: "No users found" });
    } else {
      return res.status(200).json({users});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

const signupUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        let existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        } else {
            let newUser = new User({name, email, password, blogs: []});
            let salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            let savedUser = await newUser.save();
            if(savedUser){
                delete savedUser.password
                return res.status(201).json({message: "User created successfully",user:savedUser});
            } else {
                return res.status(400).json({message: "User could not be created"});
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        throw new Error(error);
    }
}


const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if(user){
            let isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                return res.status(200).json({message: "Login successful", email: user.email, name: user.name});
            } else {
                return res.status(400).json({message: "Invalid credentials"});
            }
        }else{
            return res.status(400).json({message: "Invalid credentials"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        throw new Error(error);
    }
}

module.exports = {getAllUsers, signupUser, loginUser}
