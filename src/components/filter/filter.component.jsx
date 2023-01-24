import React from 'react';
import { useFilter } from '../../context/filter.context';
import FilterBox from '../filter-box/filter-box.component';
import './filter.styles.scss';

const Filter = ({ customClass }) => {
  const { filters, clearAllFilters } = useFilter();

  const clearFilters = () => {
    clearAllFilters();
  };

  return (
    <>
      {filters.length > 0 && (
        <div className={`filter ${customClass}`}>
          <div className="filter__filters">
            {filters && filters.map((filter) => <FilterBox key={filter} filter={filter} />)}
          </div>
          <button className="filter__clear" onClick={clearFilters}>
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
