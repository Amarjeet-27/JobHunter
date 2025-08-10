import React from "react";

const Filter = () => {
  return (
    <div className="w-100 h-screen fixed top-[360px] left-0 p-4 bg-white border-r shadow-md overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      {/* Location Filter */}
      <div className="mb-6">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Location
        </label>
        <div className="flex gap-2">
          <input
            id="location"
            type="text"
            placeholder="e.g. Bangalore"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Search
          </button>
        </div>
      </div>

      {/* Company Filter */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company Name
        </label>
        <div className="flex gap-2">
          <input
            id="company"
            type="text"
            placeholder="e.g. Google"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
