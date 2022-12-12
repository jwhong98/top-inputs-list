import React from "react";
// Function: render our tasks
const createListItem = (task) => {
  return <li>{task}</li>;
};
const Overview = (props) => {
  return (
    <div>
      <ul>{props.tasks.map(createListItem)}</ul>
    </div>
  );
};

export default Overview;
