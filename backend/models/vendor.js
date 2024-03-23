const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendorSchema = new Schema({
 cafe: { type: String, trim: true, required: true },
 logo: { type: String, trim: true, required: true },
 address: { type: String, trim: true, required: true },
 emailId: { type: String, required: true, unique: true },
 password: { type: String },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("vendor", vendorSchema)
