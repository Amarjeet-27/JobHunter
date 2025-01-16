import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center  gap-8 my-10">
        <input
          type="text"
          placeholder="Skills"
          className="border-2 border-gray-300 p-2 rounded-lg w-[32%]"
        />
        <button className="bg-red-500 text-white p-2.5 rounded-lg w-60">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
