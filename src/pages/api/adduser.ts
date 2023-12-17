import type { NextApiRequest, NextApiResponse } from 'next'
import User from '@/models/userModel'
import connectDB from '@/libs/db'
import Order from '@/models/product'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { amount, email, phone, comment } = req.body
  if (amount && email && phone) {
    await connectDB()

    const userExists = await User.findOne({ email })

    if (userExists) {
      const orders = await Order.find({ user_id: userExists._id })

      const addorder = await Order.create({
        amount,
        user_id: userExists._id,
        phone,
        comment,
        count: orders.length + 1,
      })

      if (addorder) res.status(201).json({ message: 'Order added', data: addorder, success: true })
      else res.status(400).json({ message: 'Order data invalid', success: false })
    } else {
      const adduser = await User.create({ email, phone })
      if (adduser) {
        const addorder = await Order.create({
          amount,
          user_id: adduser._id,
          phone,
          comment,
          count: 1,
        })

        if (addorder)
          res.status(201).json({ message: 'Order added', data: addorder, success: true })
        else res.status(400).json({ message: 'Order data invalid', success: false })
      } else res.status(400).json({ message: 'User data invalid', success: false })
    }
  } else
    res
      .status(400)
      .json({ success: false, message: 'All fields are required: amount, email, phone, commentz' })
}
