const { Schema, model } = require('mongoose')

const cardSchema = new Schema(
  {
    title: { type: String, required: true },
    logo: { type: String, trim: true, required: true },
    description: { type: String, required: true },
    stamp: [{ type: Schema.Types.ObjectId, ref: 'Stamp' }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    // set default value to true whenever free coffee is availed
    isArchived: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'Card',
  }
)

module.exports = model('Card', cardSchema)
