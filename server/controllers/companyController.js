import { get } from "mongoose";
import CompanyModel from "../models/companyModel.js";
import { getServerStatus } from "./Config.js";
import { scrapeJobs } from "./JobScrapper.js";

let serverReady = false;
// let counter = 0;

const getStatus = (req, res) => {
  res.send({
    success: true,
    message: "Server is ready",
    serverReady: getServerStatus(),
  });
};
const getCompanies = async (req, res) => {
  try {
    const companies = await CompanyModel.find().sort({ postedAt: 1 });
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
};

const getCompaniesBySkill = async (req, res) => {
  try {
    const skill = req.body.skill;
    const companies = await CompanyModel.find({
      skills: { $in: [new RegExp(skill, "i")] },
    });
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
};
export { getCompanies, getCompaniesBySkill, getStatus };
