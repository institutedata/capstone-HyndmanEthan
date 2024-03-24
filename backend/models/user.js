const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    userName: { type: String, unique: true, required: true },
    email: { type: String, trim: true, required: true, unique: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String, required: true, select: false, minLength: [6, 'Password must be at least 6 characters'] },
  },
  {
    timestamps: true,
    collection: 'User',
  }
)
module.exports = mongoose.model('user', userSchema)
