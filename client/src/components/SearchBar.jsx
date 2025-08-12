import { useEffect, useState } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ setSearchSkill, setJobs, placeholder, id, label }) => {
  const [input, setInput] = useState("");
  const URL = import.meta.env.VITE_APP_URL;

  const onSearch = async () => {
    try {
      if (input === "") {
        return;
      }
      setSearchSkill(true);
      const res = await axios.post(`${URL}/jobs/${id}`, {
        data: input,
      });
      if (res.data?.success) {
        setJobs(res.data.companies);
        console.log(res);
      } else {
        console.log("Error in fetching details ", res.data?.message);
      }
    } catch (error) {
      console.error("Error in searching jobs: ", error);
    }
  };

  // const onClear = () => {
  //   setInput("");
  //   setSearchSkill(false);
  // };
  useEffect(() => {
    if (input === "") {
      setSearchSkill(false);
    }
  }, [input]);

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder={placeholder}
          id={id}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          className="px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-blue-700"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
