import express from "express";
import "dotenv/config";

import urlRoute from "./routes/url.mjs";
import redirectRoute from "./routes/redirectUrl.mjs";
import connectMongoDB from "./connectDB.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectMongoDB(process.env.MONGO_URI);
// connectMongoDB(process.env.MONGO_URI).then(()=>console.log("connected Successfully"))
app.use("/url", urlRoute);
app.use("/link", redirectRoute);

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
});
