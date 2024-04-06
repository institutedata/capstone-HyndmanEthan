const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, trim: true, required: true, unique: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String, required: true, minLength: [6, 'Password must be at least 6 characters'] },
  },
  {
    timestamps: true,
    collection: 'User',
  }
)
module.exports = mongoose.model('user', userSchema)
