import React from "react";

const Tag = (props) => {
  const handleClick = () => {
    props.addTagToFilters(props.value);
  };
  return (
    <li className="tag" onClick={handleClick}>
      {props.value}
    </li>
  );
};

export default Tag;
