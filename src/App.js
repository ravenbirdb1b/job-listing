import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import data from "./data/data.json";

function App() {
  const [isSelected, setIsSelected] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./images/bg-header-desktop.svg"
          alt="header-img"
          className="bg-header"
        />
      </header>
      <div className="job-listing-wrapper">
        {data.map((job) => (
          <JobCard
            {...job}
            key={job.id}
            selected={isSelected.includes(job.id)}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
