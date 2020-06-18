import React from "react";
import Job from "./components/Job";
import { jobs } from "./data";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <header></header>
      <div className="job-listings">
        {jobs.map((job) => {
          return <Job {...job} key={job.id.toString()} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
