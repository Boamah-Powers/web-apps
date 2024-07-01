import { createRequire } from "module";
const require = createRequire(import.meta.url)
require('dotenv').config();

export const PORT = 5555;

export const  mongoDBURL = process.env.mongoDBURL;