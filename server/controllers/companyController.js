import { get } from "mongoose";
import CompanyModel from "../models/companyModel.js";
import { getServerStatus } from "./Config.js";
import { scrapeJobs } from "./JobScrapper.js";

const getStatus = async (req, res) => {
  await scrapeJobs();
  const val = getServerStatus();
  res.send({
    success: true,
    message: val ? "Server is ready" : "Server not ready",
    serverReady: val,
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
    const skill = req.body.data;
    const companies = await CompanyModel.find({
      skills: { $in: [new RegExp(skill, "i")] },
    });
    res.send({
      success: true,
      message: "Get all companies by skills",
      companies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getCompaniesByLocation = async (req, res) => {
  try {
    const location = req.body.data;
    const companies = await CompanyModel.find({
      location: { $in: [new RegExp(location, "i")] },
    });
    res.send({
      success: true,
      message: "Get all companies by location",
      companies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getCompaniesByCompany = async (req, res) => {
  try {
    const company = req.body.data;
    const companies = await CompanyModel.find({
      company: { $in: [new RegExp(company, "i")] },
    });
    res.send({
      success: true,
      message: "Get all companies by company name",
      companies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
export {
  getCompanies,
  getCompaniesBySkill,
  getCompaniesByLocation,
  getCompaniesByCompany,
  getStatus,
};
