import React from 'react';
import { useFilter } from '../../context/filter.context';
import './filter-box.styles.scss';

const FilterBox = ({ filter }) => {
  const { removeFilterFromFilters } = useFilter();

  const removeFilter = () => {
    removeFilterFromFilters(filter);
  };

  return (
    <div className="filter-box">
      <p className="filter-box__text">{filter}</p>
      <span className="filter-box__close" onClick={removeFilter}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
    </div>
  );
};

export default FilterBox;
