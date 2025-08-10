import express from "express";
import {
  getCompanies,
  getCompaniesBySkill,
  getStatus,
} from "../controllers/companyController.js";

const companyRouter = express.Router();
companyRouter.get("/jobs", getCompanies); // get all companies
companyRouter.get("/status", getStatus);
companyRouter.post("/jobs/skill", getCompaniesBySkill);

export default companyRouter;
