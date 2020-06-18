import React from "react";

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
        <li className="tag">{props.role}</li>
        <li className="tag">{props.level}</li>
        {props.languages.map((language) => {
          return (
            <li className="tag" key={language}>
              {language}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Job;
