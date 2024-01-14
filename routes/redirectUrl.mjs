import express from "express";
import { redirectToUrl } from "../controllers/url.mjs";
const router = express.Router();

router.get("/:shortId", redirectToUrl);

export default router;
