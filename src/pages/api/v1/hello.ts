import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '../../../types/ApiResponse';

export default function handler(
  _: NextApiRequest,
  response: NextApiResponse<ApiResponse>
) {
  const name: string =
    Math.floor(Math.random() * 100) >= 50 ? 'John Doe' : 'Jane Doe';

  return response.status(200).json({
    success: true,
    name,
    now: new Date()
  });
}
