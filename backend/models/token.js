const { Schema, model } = require('mongoose')

const tokenSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    tokens: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'Token',
  }
)

module.exports = model('Token', tokenSchema)
