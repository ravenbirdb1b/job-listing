import { useMemo, useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import data from "./data/data.json";
import Filters from "./components/Filters";

function App() {
  const [isSelected, setIsSelected] = useState([]);
  const [filters, setFilters] = useState([]);

  const filteredJobs = useMemo(() => {
    return data.filter((dt) => {
      const tags = new Set([
        `${dt.role}`,
        `${dt.level}`,
        ...dt.languages,
        ...dt.tools,
      ]);

      let isFiltered = true;
      for (let index = 0; index < filters.length; index++) {
        if (!tags.has(filters[index])) {
          isFiltered = false;
          break;
        }
      }

      return isFiltered;
    });
  }, [filters]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./images/bg-header-desktop.svg"
          alt="header-img"
          className="bg-header"
        />
        <div className="filter-wrapper">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
      </header>
      <div className="job-listing-wrapper">
        {filteredJobs.map((job) => (
          <JobCard
            {...job}
            key={job.id}
            selected={isSelected.includes(job.id)}
            setIsSelected={setIsSelected}
            filters={filters}
            setFilters={setFilters}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
