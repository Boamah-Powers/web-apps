import express, { response } from "express";
import { summarizeText } from "../api/summarize.api.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.render("summarizer");
});

router.post("/", (req, res) => {
	const originalText = req.body.formText;

	summarizeText(originalText)
		.then((response) => {
			res.render("summarizer", {
				originalText: originalText,
				summarizedText: response,
			});
		})
		.catch((error) => {
			res.render("summarizer", {
				originalText: originalText,
				summarizedText: error.message(),
			});
		});
});

export default router;
