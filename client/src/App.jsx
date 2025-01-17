import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AllJobs from "./components/AllJobs";
import { BrowserRouter } from "react-router-dom";
import SkillBased from "./components/SkillBased";
function App() {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <SearchBar setShow={setShow} setJobs={setJobs} />
      {show ? <SkillBased jobs={jobs} /> : <AllJobs />}
    </BrowserRouter>
  );
}

export default App;
