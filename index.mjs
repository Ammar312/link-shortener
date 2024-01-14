import express from "express";
import urlRoute from "./routes/url.mjs";
import connectMongoDB from "./connectDB.mjs";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectMongoDB();
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
});
