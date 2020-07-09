import React from "react";

// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
