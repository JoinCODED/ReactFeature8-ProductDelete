import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";

// Data
import _cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

const CookieList = () => {
  const [cookies, setCookies] = useState(_cookies);

  const deleteCookie = cookieId => {
    const updatedCookies = cookies.filter(cookie => cookie.id !== +cookieId);
    setCookies(updatedCookies);
  };

  const cookieList = cookies.map(cookie => (
    <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
  ));

  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
