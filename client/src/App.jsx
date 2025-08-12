import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AllJobs from "./components/AllJobs";
import SkillBased from "./components/SkillBased";
import axios from "axios";
import Loader from "./components/Loader";
import Filter from "./components/Filter";

function App() {
  const [searchSkill, setSearchSkill] = useState(false);
  const [searchByLocation, setSearchByLocation] = useState(false);
  const [searchByCompany, setSearchByCompany] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [data, Setdata] = useState([]);
  const [serverReady, setServerReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const URL = import.meta.env.VITE_APP_URL;

  const checkServerStatus = async () => {
    try {
      const res = await axios.get(`${URL}/status`);
      console.log("Server status response: ", res.data?.serverReady);
      if (res.data?.serverReady) {
        setServerReady(true);
        setLoading(false);
        getData();
      } else {
        setTimeout(checkServerStatus, 1000); // Retry after 1 second
      }
    } catch (error) {
      console.log("Error checking server status: ", error);
      setTimeout(checkServerStatus, 1000); // Retry after 1 second
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(`${URL}/jobs`);
      if (res.data?.success) {
        // Setdata(res.data.companies);
        Setdata((pre) => [...pre, ...res.data.companies]);
      } else {
        console.log("Error in fetching details ", res.data?.message);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    checkServerStatus();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />

      <div className="flex w-full overflow-x-auto [@media(min-width:1056px)]:overflow-x-visible snap-x snap-mandatory">
        <div className="flex-1 px-4 min-w-[300px] snap-start">
          <Filter
            setSearchSkill={setSearchSkill}
            setSearchByLocation={setSearchByLocation}
            setSearchByCompany={setSearchByCompany}
            setJobs={setJobs}
          />
        </div>

        <div className="flex-[12] px-4 min-w-[800px] snap-start" id="jobs">
          {loading ? (
            <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center">
              <Loader />
            </div>
          ) : searchSkill || searchByLocation || searchByCompany ? (
            <SkillBased jobs={jobs} />
          ) : (
            <AllJobs data={data} getData={getData} />
          )}
        </div>

        {/* Third column */}
        <div className="flex-1 bg-transparent snap-start"></div>
      </div>
    </div>
  );
}

export default App;
