import express from "express";
import {
  getCompanies,
  getCompaniesBySkill,
} from "../controllers/companyController.js";

const companyRouter = express.Router();
companyRouter.get("/jobs", getCompanies); // get all companies
companyRouter.post("/jobs/skill", getCompaniesBySkill);

export default companyRouter;
