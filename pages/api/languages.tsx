import { NextApiRequest, NextApiResponse } from 'next';

const secret: string = process.env.API_SECRET!;

interface ResponseData {
  success: boolean;
  data: any;
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const response = await fetch(
      'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      {
        headers: {
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': secret,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
      }
    );

    const json = await response.json();
    return res.status(200).json({
      success: true,
      data: json,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      data: error.message,
    });
  }
}
