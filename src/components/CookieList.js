import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Data
import cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

const CookieList = (props) => {
  const [query, setQuery] = useState("");

  const cookieList = props.cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem cookie={cookie} setCookie={props.setCookie} key={cookie.id} />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default CookieList;
