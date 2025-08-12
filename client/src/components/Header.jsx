import React from "react";
import heroImage from "../assets/header.jpg";
const Header = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-gray-50 px-6"
      id="header"
    >
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center p-10 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Your Dream Job is Just a Click Away!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Get the latest job openings that best suit you.
          </p>
          <button
            onClick={() => {
              document.getElementById("jobs").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Explore Jobs
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={heroImage}
            alt="Job Search"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
