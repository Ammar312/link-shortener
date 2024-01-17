import { nanoid } from "nanoid";
import { URL } from "../models/url.mjs";

export const generateShortUrl = async (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    return res.status(400).send({ error: "URL is required" });
  }
  const shortId = nanoid(5);
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visited: [],
  });
  return res.render("home", {
    id: shortId,
  });
};

export const redirectToUrl = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    console.log(shortId);
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: { visited: { timeStamp: Date.now() } },
      }
    );

    if (!entry) {
      return res.status(404).json({ error: "URL not found" });
    }
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const showAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.json({
    totalClicks: result.visited.length,
    analytics: result.visited,
  });
};
