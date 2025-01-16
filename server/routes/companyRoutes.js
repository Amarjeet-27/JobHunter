import express from "express";
import {
  getCompanies,
  getCompaniesBySkill,
} from "../controllers/companyController.js";

const companyRouter = express.Router();
companyRouter.get("/", getCompanies); // get all companies
companyRouter.post("/", getCompaniesBySkill);

export default companyRouter;
