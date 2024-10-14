import express, { response } from "express";
import { generateImage } from "../api/text-to-image.api.js";

const router = express.Router()

router.get('/', (req, res) => {
    res.render('text-to-image.hbs');
});

router.post('/', (req, res) => {
    const text = req.body.formText;

    generateImage(text)
        .then(response => {
            return Buffer.from(response, 'binary').toString('base64');
        })
        .then(base64Image => {
            const imageUrl = `data:image/jpeg;base64,${base64Image}`;
            res.render('text-to-image', {originalText: text, imgURL: imageUrl});
        })
        .catch(error => {
            console.log(error);
        })
});

export default router;