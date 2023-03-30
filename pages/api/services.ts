// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { services } from '@/data'
import type { NextApiRequest, NextApiResponse } from 'next'

const service = (req: NextApiRequest, res: NextApiResponse) =>
  res.status(200).json({ services })

export default service