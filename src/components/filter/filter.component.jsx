import { useFilter } from "../../context/filter.context";
import FilterBox from "../filter-box/filter-box.component";
import "./filter.styles.scss";

const Filter = ({ customClass }) => {
  const { filters } = useFilter();

  return (
    <>
      {filters.length > 0 && (
        <div className={`filter ${customClass}`}>
          <div className="filter__filters">
            {filters &&
              filters.map((filter) => (
                <FilterBox key={filter} filter={filter} />
              ))}
          </div>
          <button className="filter__clear">Clear</button>
        </div>
      )}
    </>
  );
};

export default Filter;
