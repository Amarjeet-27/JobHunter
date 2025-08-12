import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center w-full text-blue-800 bg-white shadow-md fixed top-0 z-50 px-8">
      {/* Logo / Brand */}
      <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
        Job<span className="text-blue-500">Hunter</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 ml-auto text-lg font-medium ">
        <li
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
          onClick={() => {
            document.getElementById("header").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300 ml-[100px]"
          onClick={() => {
            document.getElementById("jobs").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Jobs
        </li>
        {/* <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
          About
        </li>
        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
          Contact
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
