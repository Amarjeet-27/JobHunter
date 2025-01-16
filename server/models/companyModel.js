import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  logo: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    // required: true,
  },
  companyName: {
    type: String,
    // required: true,
  },
  // description: {
  //   type: String,
  //   // required: true
  // },
  location: {
    type: [String],
    // required: true,
  },
  salary: {
    type: String,
    // required: true,
  },
  experience: {
    type: String,
    // required: true,
  },
  skills: {
    type: [String],
    // required: true,
  },
  link: {
    type: String,
    // required: true,
  },
  postedAt: {
    type: String,
    // required: true,
  },
});

const CompanyModel = mongoose.model("Company", companySchema);

export default CompanyModel;
