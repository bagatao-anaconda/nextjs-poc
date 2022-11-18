import { promises as fs } from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

const datafile = path.join(process.cwd(), 'data', 'data.json');

interface ResponseData {
  success: boolean;
  data: any;
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const data = await fs.readFile(datafile, 'utf8');
    return res.status(200).json({
      success: true,
      data: JSON.parse(data),
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      data: error.message,
    });
  }
}
