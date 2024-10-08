import React, { useState } from "react";

const JobCard = (props) => {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    selected,
    setIsSelected,
    filters,
    setFilters,
  } = props;

  const [cardFilters, setCardFilters] = useState([]);

  const handleSelect = (id) => {
    if (selected) {
      setIsSelected((prev) => prev.filter((prevId) => prevId !== id));
    } else {
      setIsSelected((prev) => [...prev, id]);
    }
  };

  const handleFilterSelect = (filter) => {
    if (cardFilters.includes(filter)) {
      setCardFilters(cardFilters.filter((cardFilter) => cardFilter !== filter));
    } else {
      setCardFilters([...cardFilters, filter]);

      if (!filters.includes(filter)) {
        setFilters([...filters, filter]);
      }
    }
  };

  return (
    <div className={`job-card-wrapper ${selected ? "selected" : ""}`}>
      <div className="job-card-content-wrapper">
        <div className="job-card-image">
          <img src={logo} alt={company} className="card-img" />
        </div>

        <div className="job-content">
          <div className="company-name-wrapper">
            <div className="company-name">{company}</div>
            <div className="job-tag-wrapper">
              {props.new && <div className="job-tag new">new!</div>}
              {featured && <div className="job-tag featured">featured</div>}
            </div>
          </div>

          <div className="job-role" onClick={() => handleSelect(id)}>
            {position}
          </div>

          <div className="job-metadata-wrapper">
            <div className="job-metadata">{postedAt}</div>
            <div className="seperator" />
            <div className="job-metadata">{contract}</div>
            <div className="seperator" />
            <div className="job-metadata">{location}</div>
          </div>
        </div>
      </div>

      <div className="job-card-tag-info">
        <div className="job-card-tags-wrapper">
          {[`${role}`, `${level}`, ...languages, ...tools].map((tag, idx) => (
            <div
              className={`job-card-tag ${
                cardFilters.includes(tag) ? "selected" : ""
              }`}
              key={idx}
              onClick={() => handleFilterSelect(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
