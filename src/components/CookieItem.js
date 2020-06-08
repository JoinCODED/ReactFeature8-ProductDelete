import React from "react";

// Styling
import { CookieWrapper, DeleteButtonStyled } from "../styles";

const CookieItem = (props) => {
  const cookie = props.cookie;

  const handleDelete = () => {
    props.deleteCookie(cookie.id);
  };

  return (
    <CookieWrapper>
      <img
        alt={cookie.name}
        src={cookie.image}
        onClick={() => props.setCookie(cookie)}
      />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </CookieWrapper>
  );
};

export default CookieItem;
