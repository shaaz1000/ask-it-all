import React from "react";
import "./_SearchField.scss";
import SearchIcon from "@mui/icons-material/Search";

function SearchField({ value }) {
  return (
    <div className="SearchField">
      <button type="submit" className="searchBtn">
        <SearchIcon />
      </button>
      <input type="text" placeholder="Search">{value}</input>
    </div>
  );
}

export default SearchField;
