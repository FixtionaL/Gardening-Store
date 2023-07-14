import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
