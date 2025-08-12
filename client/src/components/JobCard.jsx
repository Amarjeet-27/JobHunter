import "font-awesome/css/font-awesome.min.css";

const JobCard = ({ job }) => {
  return (
    <div className="flex justify-center items-center px-3 sm:px-6">
      {/* <div className="w-full sm:w-[90%] lg:w-[80%] xl:w-[70%] mb-8 flex mx-auto"> */}
      <div className="w-[80%] mb-8 flex mx-auto">
        <div className="flex w-full flex-col p-4 sm:p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-gray-200">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 py-4">
            {/* Company Info */}
            <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
              <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={job.logo}
                  alt="logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  {job.companyName}
                </h1>
                <p className="text-sm sm:text-base text-gray-600">{job.role}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {job.location?.map((location, ind) => (
                    <span
                      key={ind}
                      className="text-xs sm:text-sm bg-gray-100 border border-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-md"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Meta Info */}
            <div className="text-xs sm:text-sm md:text-base text-gray-600 flex flex-col gap-1 sm:gap-2 w-full md:w-auto">
              <span className="text-xs sm:text-sm bg-gray-100 text-blue-800 border border-blue-300 px-2 sm:px-3 py-1 rounded-md">
                <i className="fa-solid fa-calendar-days" /> {job.postedAt} days
                ago
              </span>

              {job.salary && (
                <span className="text-xs sm:text-sm bg-gray-100 text-blue-800 border border-blue-300 px-2 sm:px-3 py-1 rounded-md">
                  <i className="fa-solid fa-indian-rupee-sign" /> {job.salary}
                </span>
              )}
              <span className="text-xs sm:text-sm bg-gray-100 border text-blue-800  border-blue-300 px-2 sm:px-3 py-1 rounded-md">
                <i className="fa-solid fa-star" /> {job.experience} of exp
              </span>
            </div>
          </div>

          {/* Skills & Apply Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <ul className="flex flex-wrap items-center text-xs sm:text-sm gap-1 sm:gap-2">
              {job.skills?.map((skill, ind) => (
                <li
                  key={ind}
                  className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 border border-blue-300 rounded-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <a
              href={job.link != null ? job.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all w-full md:w-auto text-center"
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
