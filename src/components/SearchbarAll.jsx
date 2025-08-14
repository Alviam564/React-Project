import React from 'react';

const SearchbarAll = ({ searchTerm, onSearchChange, className = '' }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <input
        type="text"
        placeholder="Search all within the set"
        className={className}
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchbarAll;