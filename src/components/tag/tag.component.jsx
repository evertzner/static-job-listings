import React from 'react';
import { useFilter } from '../../context/filter.context';
import './tag.styles.scss';

const Tag = ({ tag }) => {
  const { addFilterToFilters } = useFilter();

  const addFilter = () => {
    addFilterToFilters(tag);
  };

  return (
    <div className="tag" onClick={addFilter}>
      {tag}
    </div>
  );
};

export default Tag;
