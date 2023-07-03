import type { NextApiRequest, NextApiResponse } from 'next'
import { getSortedData } from '../../lib/posts';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getSortedData();
  res.status(200).json({ data })
}
