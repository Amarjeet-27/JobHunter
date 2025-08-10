import React, { useEffect, useState } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ setSearchSkill, setJobs }) => {
  const [input, setInput] = useState("");
  const URL = import.meta.env.VITE_APP_URL;
  const onSearch = async () => {
    setSearchSkill(true);
    const res = await axios.post(`${URL}/jobs/skill`, {
      skill: input,
    });
    if (res.data?.success) {
      setJobs(res.data.companies);
      console.log(res);
    } else {
      console.log("Error in fetching details ", res.data?.message);
    }
  };

  const onClear = () => {
    setInput("");
    setSearchSkill(false);
  };
  useEffect(() => {
    if (input === "") {
      setSearchSkill(false);
    }
  }, [input]);

  return (
    <div className="flex justify-center items-center px-4 sm:px-8">
      <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] flex flex-col md:flex-row gap-4 my-10">
        <div className="relative w-full md:w-[70%] lg:w-[75%]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            placeholder="Skills"
            className="border-2 border-gray-300 p-3 pr-10 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i
            onClick={onClear}
            className="fa fa-trash absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl
             text-red-500
             hover:scale-150 transition-transform"
          />
        </div>
        <button
          onClick={onSearch}
          className="bg-red-500 text-white p-3 rounded-lg w-full md:w-[30%] lg:w-[25%] text-sm md:text-base hover:bg-red-600 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
