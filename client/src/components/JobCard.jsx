import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8">
      <div className="w-full sm:w-[80%] xl:w-[60%] mb-10 flex mx-auto justify-center items-center">
        <div className="flex w-full flex-col p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 py-6">
            <div className="flex items-center gap-6">
              <div className="flex justify-center items-center w-20 h-20 bg-gray-100 border border-gray-300 rounded-lg">
                <img
                  src={job.logo}
                  alt="logo"
                  className="object-contain w-17 h-16"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  {job.companyName}
                </h1>
                <p className="text-sm md:text-base text-gray-600">{job.role}</p>
                <div className="flex flex-wrap gap-2">
                  {job.location?.map((location, ind) => (
                    <span
                      key={ind}
                      className="text-xs md:text-sm bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-md"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm md:text-base text-gray-600 flex flex-col gap-2">
              <p>{job.postedAt} days ago</p>
              <p>{job.salary}</p>
              <p>{job.experience} of exp</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4">
            <ul className="flex flex-wrap items-center text-xs md:text-sm gap-2">
              {job.skills?.map((skill, ind) => {
                if (ind < 3) {
                  return (
                    <li
                      key={ind}
                      className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-300 rounded-lg"
                    >
                      {skill}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <a
              href={job.link != null ? job.link : "#"}
              target="_blank"
              className="text-sm md:text-base px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
