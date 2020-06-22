import React, { useState, useEffect } from "react";
import Job from "./components/Job";
import api from "./Api";
import { jobs as defaultJobs } from "./data";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const addTagToFilters = (tag) => {
    // check if tag is in filters
    if (filters.includes(tag)) {
      return;
    }
    //if tag is in filters ignore

    setFilters([...filters, tag]);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [filters]);

  const fetchJobs = () => {
    api
      .get("http://localhost:3004/jobs")
      .then((data) => setJobs(data))
      .catch((err) => {
        console.log(err);
        setJobs(defaultJobs);
      });
  };

  const filterJobs = () => {
    if (filters.length === 0) {
      fetchJobs();
      return;
    }
    const filteredJobs = jobs.filter((job) => {
      const filterAtributes = [
        ...job.languages,
        ...job.tools,
        job.role,
        job.level,
      ];
      return filters.every((filter) => filterAtributes.includes(filter));
    });
    setJobs(filteredJobs);
  };

  const displayJobs = () => {
    return jobs.map((job) => {
      return (
        <Job
          {...job}
          key={job.id.toString()}
          addTagToFilters={addTagToFilters}
        />
      );
    });
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <React.Fragment>
      <header></header>
      <main>
        {filters.length > 0 && (
          <section className="filters">
            <ul>
              {filters.map((filter, i) => {
                return (
                  <li className="tag" key={i.toString()}>
                    {filter}
                  </li>
                );
              })}
            </ul>
            <span className="clear" onClick={clearFilters}>
              clear
            </span>
          </section>
        )}
        <div className="job-listings">{displayJobs()}</div>
      </main>
    </React.Fragment>
  );
};

export default App;
