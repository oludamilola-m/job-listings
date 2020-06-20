import React, { useState, useEffect } from "react";
import Job from "./components/Job";
import api from "./Api";
import { jobs as defaultJobs } from "./data";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const addTagToFilters = (tag) => {
    setFilters([...filters, tag]);
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  useEffect(() => {
    api
      .get("http://localhost:3004/jobs")
      .then((data) => setJobs(data))
      .catch((err) => {
        console.log(err);
        setJobs(defaultJobs);
      });
  }, []);

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
  return (
    <React.Fragment>
      <header></header>
      <div className="job-listings">{displayJobs()}</div>
    </React.Fragment>
  );
};

export default App;
