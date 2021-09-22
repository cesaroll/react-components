import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const jsonFile = path.resolve("./", "db.json");

  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;
    if (speakers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log("GET /api/speakers status: 200");
    }
  } catch (e) {
    console.log("/api/speakers error", e);
    res.status(404).send("File Not Found on server");
  }

}
