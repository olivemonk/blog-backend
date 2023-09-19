const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 6 },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
});

User = mongoose.model("User", userSchema);
module.exports = User;
