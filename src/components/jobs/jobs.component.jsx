import React from "react";
import Job from "../job/job.component";
import { useFilter } from "../../context/filter.context";

import "./jobs.styles.scss";

const Jobs = ({ jobs, customClass }) => {
  const { filters } = useFilter();

  return (
    <>
      <div
        className={`jobs ${customClass} ${
          filters.length === 0 && "notFiltered"
        }`}
      >
        {jobs && jobs.map((j) => <Job job={j} key={j.id} />)}
      </div>
    </>
  );
};

export default Jobs;
