import React from "react";
import Job from "./components/Job";
import { jobs } from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="job-listings">
      {jobs.map((job) => {
        return <Job {...job} key={job.id.toString()} />;
      })}
    </div>
  );
};

export default App;
