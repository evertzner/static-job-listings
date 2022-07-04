import React from "react";
import Job from "../job/job.component";

const Jobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((j) => (
        <Job job={j} key={j.id} />
      ))}
    </>
  );
};

export default Jobs;
