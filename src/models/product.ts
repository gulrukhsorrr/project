import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    amount: { type: String, required: true },
    user_id: { type: String, required: true },
    phone: { type: String, required: true },
    count: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true }
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
