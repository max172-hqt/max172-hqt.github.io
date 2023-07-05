import type { NextApiRequest, NextApiResponse } from 'next'
import { getSortedData } from '../../lib/posts';
import type { Post } from '../../types';

type Data = {
  data: Post[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getSortedData();
  res.status(200).json({ data })
}
