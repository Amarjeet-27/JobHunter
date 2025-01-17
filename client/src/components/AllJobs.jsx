import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
const AllJobs = () => {
  const [data, Setdata] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3002/jobs");
    Setdata(res.data.companies);
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((job, ind) => (
        <JobCard key={ind} job={job} />
      ))}
    </div>
  );
};

export default AllJobs;
