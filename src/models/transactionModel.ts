import { TransactionState } from '@/enums/transaction.enum'
import mongoose, { Schema } from 'mongoose'

const transactionSchema = new Schema(
  {
    order: { type: String },
    state: { type: Number, enum: Object.values(TransactionState), required: true },
    amount: { type: Number, required: true },
    user_id: { type: String, required: true },
    product_id: { type: String, required: true },
    create_time: { type: Number, default: Date.now() },
    perform_time: { type: Number, default: 0 },
    cancel_time: { type: Number, default: 0 },
    reason: { type: Number, default: null },
    transaction_id: { type: String, required: true },
  },
  { timestamps: true }
)

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema)

export default Transaction
