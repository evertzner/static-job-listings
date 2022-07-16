import React from "react";
import Tag from "../tag/tag.component";

import "./job.styles.scss";

const Job = ({ job }) => {
  const {
    company,
    logo,
    isNew,
    isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tags = [role, level, ...languages, ...tools];

  return (
    <div className={`job${isFeatured ? " isFeatured" : ""}`}>
      <div className="job__info">
        <div className="job__info__img-container">
          <img src={logo} alt={company} />
        </div>
        <div className="job__info__details">
          <div className="job__info__details--header">
            <p className="job__info__details--header__company">{company}</p>
            {isNew && (
              <div className="job__info__details--header__new-tag">NEW!</div>
            )}
            {isFeatured && (
              <div className="job__info__details--header__featured-tag">
                FEATURED
              </div>
            )}
          </div>
          <h2 className="job__info__details--position">{position}</h2>
          <div className="job__info__details--footer">
            {postedAt}
            &nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;
            {contract}
            &nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;
            {location}
          </div>
        </div>
      </div>
      <div className="job__tags">
        {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
    </div>
  );
};

export default Job;
