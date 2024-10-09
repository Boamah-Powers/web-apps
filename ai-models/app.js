import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'node:fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Determine the directory name (__dirname equivalent in ES modules)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let rootDir = null;

// Read and parse the config.json file synchronously
try {
    const data = readFileSync(path.join(__dirname, 'config.json'), 'utf-8');
    const config = JSON.parse(data);
    rootDir = path.join(__dirname, config.rootDir);
} catch (err) {
    console.error('Error reading configuration file:', err.message);
}

// middleware
app.use(express.static(rootDir));
app.use(express.json());
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('landing-page');
});

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}!`);
});
