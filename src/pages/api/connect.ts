import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/libs/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB()
  res.status(200).json('connect')
}
