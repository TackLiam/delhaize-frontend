import React from "react";
import SearchBarCSS from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={SearchBarCSS.bar}>
      <input
        type="text"
        placeholder="Zoek producten"
        id="searchInput"
        name="searchInput"
      />
      <button className={SearchBarCSS.search}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M11.91 13.92a.83.83 0 1 1 1.18-1.18l3.33 3.34a.83.83 0 1 1-1.18 1.18l-3.33-3.34Z"></path>
          <path d="M3.33 9.17a5.83 5.83 0 1 0 11.67 0 5.83 5.83 0 0 0-11.67 0Zm10 0a4.17 4.17 0 1 1-8.33 0 4.17 4.17 0 0 1 8.33 0Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
