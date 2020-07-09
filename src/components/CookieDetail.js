import React from "react";
import { DetailWrapper } from "../styles";

const CookieDetail = (props) => {
  const cookie = props.cookie;
  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
    </DetailWrapper>
  );
};

export default CookieDetail;
