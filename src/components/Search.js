import React from "react";
import "./SearchStyles.css";

const Search = ({ searchValue, onChangeValue, isRequired = false }) => {
  return (
    <div className="input-icons">
      <i className="fab fa-sistrix"></i>
      <input
        id="search"
        className="input-field"
        type="text"
        placeholder="Enter a city name"
        autoComplete="off"
        value={searchValue}
        onChange={(event) => onChangeValue(event.target.value)}
        required={isRequired}
      />
    </div>
  );
};

export default Search;
