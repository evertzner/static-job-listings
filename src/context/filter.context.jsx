import React, { useContext, useReducer } from 'react';

const createAction = (type, payload) => ({ type, payload });

const addFilter = (filters, filterToAdd) => {
  if (!filters.includes(filterToAdd)) filters.push(filterToAdd);

  return filters;
};

const removeFilter = (filters, filterToRemove) => {
  return filters.filter((filter) => filter !== filterToRemove);
};

export const FilterContext = React.createContext({
  filtersToFilter: [],
  addFilterToFilters: () => {},
  removeFilterFromFilters: () => {},
  clearAllFilters: () => {}
});

const FILTERS_ACTION_TYPES = {
  SET_FILTERS: 'SET_FILTERS'
};

const INITIAL_STATE = {
  filters: []
};

const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERS_ACTION_TYPES.SET_FILTERS:
      return {
        ...state,
        ...payload
      };
    default:
      throw new Error(`Unhandled type of ${type} in filtersReducer`);
  }
};

export const useFilter = () => {
  return useContext(FilterContext);
};

export function FilterProvider({ children }) {
  const [{ filters }, dispatch] = useReducer(filtersReducer, INITIAL_STATE);

  const updateFiltersReducer = (newFilter) => {
    dispatch(
      createAction(FILTERS_ACTION_TYPES.SET_FILTERS, {
        filters: newFilter
      })
    );
  };

  const addFilterToFilters = (filterToAdd) => {
    const newFilter = addFilter(filters, filterToAdd);
    updateFiltersReducer(newFilter);
  };

  const removeFilterFromFilters = (filterToRemove) => {
    const newFilter = removeFilter(filters, filterToRemove);
    updateFiltersReducer(newFilter);
  };

  const clearAllFilters = () => {
    updateFiltersReducer([]);
  };

  const value = {
    filters,
    addFilterToFilters,
    removeFilterFromFilters,
    clearAllFilters
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
