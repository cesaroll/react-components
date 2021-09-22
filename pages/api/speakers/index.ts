import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import { data } from '../../../SpeakerData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(JSON.stringify(data, null, 2));
}
