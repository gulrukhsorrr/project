import { PaymeData, PaymeError, PaymeMethod, TransactionState } from '@/enums/transaction.enum'
import { decode } from 'js-base64'
import type { NextApiRequest, NextApiResponse } from 'next'
import TransactionError from '@/errors/transaction.error'
import Transaction from '@/models/transactionModel'
import Order from '@/models/product'
import connectDB from '@/libs/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, params, id } = req.body
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) throw new TransactionError(PaymeError.InvalidAuthorization, id)

    const data = decode(token)

    // if (!data.includes(process.env.TEST_KEY!)) {
    if (!data.includes(process.env.KEY!)) {
      throw new TransactionError(PaymeError.InvalidAuthorization, id)
    }

    await connectDB()

    // CheckPerformTransaction
    if (method === PaymeMethod.CheckPerformTransaction) {
      const {
        account: { order },
      } = params
      let { amount } = params

      const product = await Order.findById(order)
      if (!product) {
        throw new TransactionError(PaymeError.ProductNotFound, id, PaymeData.ProductId)
      }

      if (amount != product.amount) {
        throw new TransactionError(PaymeError.InvalidAmount, id)
      }

      res.json({
        result: {
          allow: true,
          detail: {
            receipt_type: 0,
            items: [
              {
                title:
                  'Sayyohlik agentliklari va turoperatorlarning xizmatlari (barcha turdagi xizmatlar), shu jumladan turistik paketlarni bron qilish, sotish',
                price: amount,
                count: 1,
                code: process.env.MXIK_CODE,
                vat_percent: 0,
                package_code: '1495084',
              },
            ],
          },
        },
      })
      return
    }
    // CheckTransaction
    else if (method === PaymeMethod.CheckTransaction) {
      const transaction = await Transaction.findOne({ transaction_id: params.id })
      if (!transaction) {
        throw new TransactionError(PaymeError.TransactionNotFound, id)
      }

      const result = {
        create_time: transaction.create_time,
        perform_time: transaction.perform_time,
        cancel_time: transaction.cancel_time,
        transaction: transaction.transaction_id,
        state: transaction.state,
        reason: transaction.reason,
      }

      res.json({ result, id: params.id })
      return
    }
    // CreateTransaction
    else if (method === PaymeMethod.CreateTransaction) {
      const {
        account: { order },
        time,
      } = params
      let { amount } = params

      const product = await Order.findById(order)
      if (!product) {
        throw new TransactionError(PaymeError.ProductNotFound, id, PaymeData.ProductId)
      }

      if (amount != product.amount) {
        throw new TransactionError(PaymeError.InvalidAmount, id)
      }

      let transaction = await Transaction.findOne({ transaction_id: params.id })
      if (transaction) {
        if (transaction.state !== TransactionState.Pending) {
          throw new TransactionError(PaymeError.CantDoOperation, id)
        }

        const currentTime = Date.now()

        const expirationTime = (currentTime - transaction.create_time) / 60000 < 12 // 12m

        if (!expirationTime) {
          await Transaction.findByIdAndUpdate(
            transaction._id,
            {
              state: TransactionState.PendingCanceled,
              reason: 4,
            },
            { new: true }
          )

          throw new TransactionError(PaymeError.CantDoOperation, id)
        }

        const result = {
          create_time: transaction.create_time,
          transaction: transaction.transaction_id,
          state: TransactionState.Pending,
        }

        res.json({ result, id })
        return
      }

      transaction = await Transaction.findOne({ user_id: product.user_id, product_id: order })
      if (transaction) {
        if (transaction.state === TransactionState.Paid)
          throw new TransactionError(PaymeError.AlreadyDone, id)
        if (transaction.state === TransactionState.Pending)
          throw new TransactionError(PaymeError.Pending, id)
      }

      const newTransaction = await Transaction.create({
        transaction_id: params.id,
        state: TransactionState.Pending,
        amount,
        user_id: product.user_id,
        product_id: product._id,
        create_time: time,
      })

      const result = {
        transaction: newTransaction.transaction_id,
        state: TransactionState.Pending,
        create_time: newTransaction.create_time,
      }

      res.json({ result, id })
      return
    }
    // PerformTransaction
    else if (method === PaymeMethod.PerformTransaction) {
      const currentTime = Date.now()

      const transaction = await Transaction.findOne({ transaction_id: params.id })
      if (!transaction) {
        throw new TransactionError(PaymeError.TransactionNotFound, id)
      }

      if (transaction.state !== TransactionState.Pending) {
        if (transaction.state !== TransactionState.Paid) {
          throw new TransactionError(PaymeError.CantDoOperation, id)
        }

        const result = {
          perform_time: transaction.perform_time,
          transaction: transaction.transaction_id,
          state: TransactionState.Paid,
        }

        res.json({ result, id })
        return
      }

      const expirationTime = (currentTime - transaction.create_time) / 60000 < 12 // 12m

      if (!expirationTime) {
        await Transaction.findByIdAndUpdate(
          transaction._id,
          {
            state: TransactionState.PendingCanceled,
            reason: 4,
            cancel_time: currentTime,
          },
          { new: true }
        )

        throw new TransactionError(PaymeError.CantDoOperation, id)
      }

      await Transaction.findByIdAndUpdate(
        transaction._id,
        { state: TransactionState.Paid, perform_time: currentTime },
        { new: true }
      )

      const result = {
        perform_time: currentTime,
        transaction: transaction.transaction_id,
        state: TransactionState.Paid,
      }

      res.json({ result, id })
      return
    }
    // CancelTransaction
    else if (method === PaymeMethod.CancelTransaction) {
      const transaction = await Transaction.findOne({ transaction_id: params.id })
      if (!transaction) {
        throw new TransactionError(PaymeError.TransactionNotFound, id)
      }

      const currentTime = Date.now()

      if (transaction.state > 0) {
        await Transaction.findByIdAndUpdate(
          transaction._id,
          {
            state: -Math.abs(transaction.state),
            reason: params.reason,
            cancel_time: currentTime,
          },
          { new: true }
        )
      }

      const result = {
        cancel_time: transaction.cancel_time || currentTime,
        transaction: transaction.transaction_id,
        state: -Math.abs(transaction.state),
      }

      res.json({ result, id })
      return
    }
  } catch (err: any) {
    if (err.isTransactionError) {
      return res.json({
        error: {
          code: err.transactionErrorCode,
          message: err.transactionErrorMessage,
          data: err.transactionData,
        },
        id: err.transactionId,
      })
    }

    res.status(err.statusCode || 500).json({ err })
  }
}
