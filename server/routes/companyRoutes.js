import express from "express";
import CompanyModel from "../models/companyModel.js";
const companyRouter = express.Router();

companyRouter.get("/", async (req, res) => {
  //   const companies = await CompanyModel.find().limit(10);
  res.send({
    success: true,
    message: "Get all companies",
    // companies,
  });
});

companyRouter.post("/", async (req, res) => {
  try {
    const skill = req.body.skill;
    const companies = await CompanyModel.find({ skills: skill });
    res.send({
      success: true,
      message: "Get all companies",
      companies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default companyRouter;
