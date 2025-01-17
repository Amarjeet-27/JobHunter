import React from "react";
import JobCard from "./JobCard";

const SkillBased = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job, ind) => (
        <JobCard key={ind} job={job} />
      ))}
    </div>
  );
};

export default SkillBased;
