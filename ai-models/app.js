import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'node:fs';

// middleware
import { logger } from './middleware/logger.js';

// routes
import summarizerRoute from './routes/summarizer.route.js';
import textToImageRoute from './routes/text-to-image.route.js';

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
app.use(express.urlencoded({extended: true}));
app.use(logger);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('landing-page');
});

app.use('/summarizer', summarizerRoute);
app.use('/text-to-image', textToImageRoute);

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}!`);
});
