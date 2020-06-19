import React from "react";
import Job from "./components/Job";
import { jobs } from "./data";
import "./App.css";

const App = () => {
  const displayJobs = () => {
    return jobs.map((job) => {
      return <Job {...job} key={job.id.toString()} />;
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
