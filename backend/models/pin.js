const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  vendorName: {type: String, required: true},
  emailId: { type: String, required: true, unique: true },
  logo: { type: String, trim: true, required: true },
  content: {type: String, },
  lat:{
    type: Number,
    required: true
  },
  lng:{
    type: Number,
    required: true
  }
},
{timestamps: true}
);
module.exports = mongoose.model("pin", pinSchema);
