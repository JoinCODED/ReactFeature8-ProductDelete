import React from "react";

// Styling
import { CookieWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

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
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
