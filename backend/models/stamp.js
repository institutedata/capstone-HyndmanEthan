const { Schema, model } = require('mongoose')

const stampSchema = new Schema(
  {
    card: { type: Schema.Types.ObjectId, ref: 'Card' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    subscribed: { type: Boolean, required: true },
    stamps: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'Stamp',
  }
)

module.exports = model('Stamp', stampSchema)
