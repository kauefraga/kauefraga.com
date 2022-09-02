// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponseData } from "../../../types/ApiResponse";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseData>
) {
  const name: string =
    Math.floor(Math.random() * 100) >= 50 ? "John Doe" : "Jane Doe";

  return res.status(200).json({
    success: true,
    data: {
      name,
    },
  });
}
