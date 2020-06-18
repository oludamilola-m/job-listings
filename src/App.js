import React from "react";
import Job from "./components/Job";
import { jobs } from "./data";
import "./App.css";

const App = () => {
  const job = {
    id: 1,
    company: "Photosnap",
    logo: "https://media.publit.io/file/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  };

  return (
    <div className="job-listings">
      <Job {...job} />
    </div>
  );
};

export default App;
