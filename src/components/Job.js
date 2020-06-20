import React from "react";
import Tag from "./Tag";

const Job = (props) => {
  const handleClick = (value) => {
    props.addTagToFilters(value);
  };
  return (
    <div className="job-card">
      <img src={props.logo} alt="photosnap" />
      <div className="features">
        <span className="company-name">{props.company}</span>

        {props.new && <span className="pill pill--cyan">New!</span>}
        {props.featured && <span className="pill pill--black">Featured</span>}
        <h5>{props.position}</h5>
        <ul className="infos">
          <li>{props.postedAt}</li>
          <li>{props.contract}</li>
          <li>{props.location}</li>
        </ul>
      </div>
      <ul className="tags">
        <Tag value={props.role} onClick={handleClick} />
        <Tag value={props.level} onClick={handleClick} />
        {props.languages.map((language) => {
          return <Tag value={language} key={language} onClick={handleClick} />;
        })}
      </ul>
    </div>
  );
};

export default Job;
