const { Schema, model } = require('mongoose')

const cardSchema = new Schema(
  {
    title: { type: String, required: true },
    logo: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    link: { type: String, required: true },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    
  },
  {
    timestamps: true,
    collection: 'Card',
  }
)

module.exports = model('Card', cardSchema)
