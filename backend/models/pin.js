const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pinSchema = new Schema(
  {
    vendorName: { type: String, required: true },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    card: { type: Schema.Types.ObjectId, ref: 'Card' },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'Pin',
  }
)
module.exports = mongoose.model('Pin', pinSchema)
