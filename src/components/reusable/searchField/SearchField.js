import React from "react";
import "./_SearchField.scss";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchField({ value, placeholder, className }) {
  return (
    <div className={`SearchField ${className}`}>
      <TextField
        value={value}
        fullWidth
        className={`search-textfield`}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchField;
