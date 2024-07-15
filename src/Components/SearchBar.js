import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SearchBar.css";

function SearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const navigateTo = useNavigate();
  const handleWordChange = (event) => {
    const newSearchWord = event.target.value;
    if (newSearchWord) {
      setSearchWord(newSearchWord.toLowerCase());
    }
  };

  const handleSearch = () => {
    return navigateTo(`/?company=${searchWord}`);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search by company"
        className="search-input"
        value={searchWord}
        onChange={handleWordChange}
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
