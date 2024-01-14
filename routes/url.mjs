import express from "express";
import { generateShortUrl } from "../controllers/url.mjs";
const router = express.Router();

router.post("/", generateShortUrl);
export default router;
