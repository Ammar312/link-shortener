import express from "express";
import "dotenv/config";

import urlRoute from "./routes/url.mjs";
import redirectRoute from "./routes/redirectUrl.mjs";
import connectMongoDB from "./connectDB.mjs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connectMongoDB(process.env.MONGO_URI).then(()=>console.log("connected Successfully"))
connectMongoDB(process.env.MONGO_URI);
app.use("/url", urlRoute);

app.use("/link", redirectRoute);
app.use("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
});
