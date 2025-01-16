import express from "express";
import dotenv from "dotenv";
import companyRouter from "./routes/companyRoutes.js";
import connectDB from "./db/db.js";
import { scrapeJobs } from "./controllers/JobScrapper.js";
import { loginAndSaveSession } from "./loginAndSave.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3002;
connectDB();
// loginAndSaveSession();
scrapeJobs();
app.use("/", companyRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
