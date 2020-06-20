import React from "react";

const Tag = (props) => {
  const handleClick = () => {
    props.onClick(props.value);
  };
  return (
    <li className="tag" onClick={handleClick}>
      {props.value}
    </li>
  );
};

export default Tag;
