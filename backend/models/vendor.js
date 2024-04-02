const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorSchema = new Schema(
  {
    cafe: { type: String, trim: true, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String, required: true, select: false, minLength: [6, 'Password must be at least 6 characters'] },
  },
  {
    timestamps: true,
    collection: 'Vendor',
  }
)
module.exports = mongoose.model('Vendor', vendorSchema)
