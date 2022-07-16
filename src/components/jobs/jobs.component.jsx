import React from "react";
import Job from "../job/job.component";

import "./jobs.styles.scss";

const Jobs = ({ jobs, customClass }) => {
  return (
    <>
      <div className={`jobs ${customClass}`}>
        {jobs && jobs.map((j) => <Job job={j} key={j.id} />)}
      </div>
    </>
  );
};

export default Jobs;
