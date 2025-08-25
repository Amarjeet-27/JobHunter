import express from "express";
import {
  getCompanies,
  getCompaniesBySkill,
  getStatus,
  getCompaniesByLocation,
  getCompaniesByCompany,
} from "../controllers/companyController.js";
import { scrapeJobs } from "../controllers/JobScrapper.js";

const companyRouter = express.Router();
companyRouter.get("/", (req, res) => {
  scrapeJobs();
  res.json({ message: "Loading all jobs" });
});

companyRouter.get("/jobs", getCompanies); // get all companies
companyRouter.get("/status", getStatus);
companyRouter.post("/jobs/skill", getCompaniesBySkill);
companyRouter.post("/jobs/location", getCompaniesByLocation);
companyRouter.post("/jobs/company", getCompaniesByCompany);
export default companyRouter;
