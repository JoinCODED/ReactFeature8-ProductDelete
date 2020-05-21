import React from "react";

// Components
import CookieItem from "./CookieItem";

// Data
import cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

const CookieList = () => {
  const cookieList = cookies.map(cookie => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
