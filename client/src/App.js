import React, { useState, useEffect } from 'react';
import SearchResults from './results';
import './assets/styles.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const handleSearch = () => {
    setIsSearchButtonClicked(true);
  };

  const handleInputChange = (event) => {
    setIsSearchButtonClicked(false);
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    setIsSearchButtonClicked(false);
  }, [searchText]);

  return (
    <div className="container">
      <div className="search">
        <h1>Voice123 Search</h1>
        <input
          type="text"
          className="searchText"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleSearch}>Search</button>
      </div>
      {isSearchButtonClicked && searchText && <SearchResults searchText={searchText} />}
    </div>
  );
}

export default App;