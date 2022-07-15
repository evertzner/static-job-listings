import "./filter-box.styles.scss";

const FilterBox = ({ filter }) => {
  return (
    <div className="filter-box">
      <p className="filter-box__text">{filter}</p>
      <span className="filter-box__close">
        <ion-icon name="close-outline"></ion-icon>
      </span>
    </div>
  );
};

export default FilterBox;
