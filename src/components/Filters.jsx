import React from "react";

const Filters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search job title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="All">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
      </select>

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="All">All Types</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Sort</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};

export default Filters;
