import React from "react";

const JobCard = () => {
  return (
    <div className=" w-[50%] mb-10 flex mx-auto justify-center items-center ">
      <div className="flex w-[100%] flex-col  p-4 bg-white shadow-md   rounded-lg">
        <div className=" flex items-center justify-between py-8 px-2">
          <div className=" flex gap-8">
            <img src="" alt="logo" />
            <div className=" flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Samsung</h1>
              <p className="text-xl">Software Developer</p>
              <div className=" flex gap-4">
                <p className="text-[1.1rem]">Location</p>
                <p className="text-[1.1rem]">Location</p>
                <p className="text-[1.1rem]">Location</p>
              </div>
            </div>
          </div>
          <div className=" text-[1.1rem] flex flex-col  gap-2">
            <p className="">10 days ago</p>
            <p className="">Salary</p>
            <p className="">Year of experience</p>
          </div>
        </div>
        <div className=" flex justify-between ">
          <ul className="flex items-center text-[1.1rem] gap-5 ">
            <li className=" px-3 py-1 border-2  rounded-lg ">SQL</li>
            <li className=" px-3 py-1 border-2  rounded-lg  ">Python</li>
            <li className=" px-3 py-1 border-2  rounded-lg   ">
              Software Developer
            </li>
          </ul>
          <button className=" flex items-center justify-center text-[1.1rem] px-5 py-1 bg-blue-700 font-semibold rounded-md text-white ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
