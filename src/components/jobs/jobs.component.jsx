import React from 'react';
import Job from '../job/job.component';
import { useFilter } from '../../context/filter.context';

import './jobs.styles.scss';

const Jobs = ({ jobs, customClass }) => {
  const { filters } = useFilter();

  let filteredJobs = [];

  const filterJobs = (filter) => {
    jobs.forEach((j) => {
      if (
        filter.every(
          (f) => j.languages.includes(f) || j.tools.includes(f) || j.level === f || j.role === f
        )
      )
        filteredJobs.push(j);
    });
  };

  filterJobs(filters);

  return (
    <>
      <div className={`jobs ${customClass} ${filters.length === 0 && 'notFiltered'}`}>
        {filteredJobs && filteredJobs.map((j) => <Job job={j} key={j.id} />)}
      </div>
    </>
  );
};

export default Jobs;
