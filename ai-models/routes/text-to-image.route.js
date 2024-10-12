import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.render('text-to-image.hbs');
})

export default router;