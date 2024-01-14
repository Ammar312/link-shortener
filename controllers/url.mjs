import { URL } from "../models/url.mjs";

export const generateShortUrl = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send({ error: "URL is required" });
  }
  const shortId = "qwerrtyuiu"; // nanoid()
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visited: [],
  });
  return res.json({ id: shortId });
};
