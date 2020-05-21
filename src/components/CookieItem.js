import React from "react";

// Styling
import { CookieWrapper } from "../styles";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper>
      <img
        alt={cookie.name}
        src={cookie.image}
        onClick={() => props.setCookie(cookie)}
      />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <p
        className="cookie-delete"
        onClick={() => props.deleteCookie(cookie.id)}
      >
        Delete
      </p>
    </CookieWrapper>
  );
};

export default CookieItem;
