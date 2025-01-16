import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const CompanyModel = mongoose.model("Company", companySchema);

export default CompanyModel;
