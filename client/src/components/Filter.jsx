import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Filter = ({
  setSearchSkill,
  setJobs,
  setSearchByLocation,
  setSearchByCompany,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past the first viewport height
      if (window.scrollY > window.innerHeight) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showFilter) return null; // Don't render until second page

  return (
    <div className="fixed top-24 left-4 w-100 p-4 bg-white shadow-lg border rounded-lg">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>
      <SearchBar
        setSearchSkill={setSearchSkill}
        setJobs={setJobs}
        placeholder={"e.g Python"}
        id={"skill"}
        label={"Skills"}
      />
      <SearchBar
        setSearchSkill={setSearchByLocation}
        setJobs={setJobs}
        placeholder={"e.g. Bangalore"}
        id={"location"}
        label={"Location"}
      />
      <SearchBar
        setSearchSkill={setSearchByCompany}
        setJobs={setJobs}
        placeholder={"e.g. Google"}
        id={"company"}
        label={"Company"}
      />
    </div>
  );
};

export default Filter;
