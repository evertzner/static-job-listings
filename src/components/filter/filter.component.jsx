//import { roles, level, languages, tools } from "../../data/data";
import { roles } from "../../data/data";
import FilterBox from "../filter-box/filter-box.component";
import "./filter.styles.scss";

const Filter = ({ customClass }) => {
  return (
    <>
      <div className={`filter ${customClass}`}>
        <div className="filter__filters">
          {roles && roles.map((role) => <FilterBox key={role} filter={role} />)}
        </div>
        <button className="filter__clear">Clear</button>
      </div>
    </>
  );
};

export default Filter;
