import React from "react";
import Tag from "./Tag";

const Job = (props) => {
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
        <Tag value={props.role} addTagToFilters={props.addTagToFilters} />
        <Tag value={props.level} addTagToFilters={props.addTagToFilters} />
        {props.languages.map((language) => {
          return (
            <Tag
              value={language}
              key={language}
              addTagToFilters={props.addTagToFilters}
            />
          );
        })}
        {props.tools.map((tool) => {
          return (
            <Tag
              value={tool}
              key={tool}
              addTagToFilters={props.addTagToFilters}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Job;
