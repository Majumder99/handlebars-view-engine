const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
});
const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;
