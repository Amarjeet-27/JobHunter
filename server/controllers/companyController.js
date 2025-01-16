import CompanyModel from "../models/companyModel.js";

const getCompanies = async (req, res) => {
  const companies = await CompanyModel.find().sort({ postedAt: 1 }).limit(2);
  res.send({
    success: true,
    message: "Get all companies",
    companies,
  });
};
const getCompaniesBySkill = async (req, res) => {
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
};
export { getCompanies, getCompaniesBySkill };
