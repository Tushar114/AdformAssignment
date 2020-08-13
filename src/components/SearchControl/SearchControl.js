import React from 'react';

function SearchControl({ handleSearch, searchText }) {
  return (
    <div className="search-right">
      <input
        type="text"
        value={searchText}
        placeholder="Search by name"
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default SearchControl;
