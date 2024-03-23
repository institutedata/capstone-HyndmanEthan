const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, trim: true, },
  lastName: { type: String, trim: true,  },
  userName: {type: String, unique:true, required:true},
  emailId: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true, },
},
{timestamps: true}
);
module.exports = mongoose.model("user", userSchema);
