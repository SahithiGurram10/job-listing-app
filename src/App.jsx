import React, { useState } from "react";
import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredJobs = jobs
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) =>
      locationFilter === "All" ? true : job.location === locationFilter
    )
    .filter((job) =>
      typeFilter === "All" ? true : job.type === typeFilter
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      if (sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Job Board</h1>
          <p>Find your dream tech job today</p>
        </header>

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} searchTerm={searchTerm} />
            ))
          ) : (
            <p className="no-results">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
