// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const prettier = require("prettier");

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const page = req.query.page
  const url = `https://raw.githubusercontent.com/nojuskybartas/portfolio-site/main/src/pages/${page}`;
  const codeData = await fetch(url);
  const code = await codeData.text();

  const width = req.query.width || '80'

  const formatted = prettier.format(code, {parser: "typescript", printWidth: Number(width) });
  
  res.status(200).json(formatted)
}
