import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
const AllJobs = () => {
  const [data, Setdata] = useState([]);
  const URL = import.meta.env.VITE_APP_URL;
  const getData = async () => {
    const res = await axios.get(`${URL}/jobs`);

    if (res.data?.success) {
      Setdata(res.data.companies);
      console.log(res.data);
    } else {
      console.log("Error in fetching details ", res.data?.message);
    }
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
