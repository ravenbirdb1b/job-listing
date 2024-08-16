import React from "react";

const Filters = (props) => {
  const { filters, setFilters } = props;

  const handleFilterSelect = (filter, clearAll = false) => {
    if (clearAll) {
      setFilters([]);
      return;
    }

    setFilters(filters.filter((oldFilter) => oldFilter !== filter));
  };

  return (
    <div
      className={`filter-card-wrapper ${filters.length === 0 ? "hidden" : ""}`}
    >
      <div className="filter-content">
        {filters.map((filter, idx) => (
          <div className="filter-card job-card-tag " key={idx}>
            <div className="filter-name">{filter}</div>

            <div
              className="remove-action-btn"
              onClick={() => handleFilterSelect(filter)}
            >
              <img
                src="./images/icon-remove.svg"
                className="remove-action-icon"
                alt="remove-tag"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="clear-action"
        onClick={() => handleFilterSelect("", true)}
      >
        Clear
      </div>
    </div>
  );
};

export default Filters;
