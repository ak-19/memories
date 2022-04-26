import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDatabase } from "./database.js";

import postsRouter from "./routes/posts.js";

const app = express();
const port = 8080;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRouter);

connectDatabase()
  .then(() => {
    app.listen(port, () => console.log(`listening at ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
