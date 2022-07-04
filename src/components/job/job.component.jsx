import React from "react";

const Job = ({ job }) => {
  const { company, position } = job;
  return (
    <div>
      <h2>{company}</h2>
      <p>{position}</p>
    </div>
  );
};

export default Job;
