import React from "react";
import "./_SearchField.scss";
import SearchIcon from "@mui/icons-material/Search";

function SearchField({ value, placeholder }) {
  return (
    <div className="SearchField">
      <div class="search-container">
        <input type="text" placeholder={placeholder} class="search-input">
          {value}
        </input>
        <button class="searchBtn">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchField;
