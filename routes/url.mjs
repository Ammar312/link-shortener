import express from "express";
import { generateShortUrl, showAnalytics } from "../controllers/url.mjs";
const router = express.Router();

router.post("/", generateShortUrl);
router.get("/analytics/:shortId", showAnalytics);

export default router;
