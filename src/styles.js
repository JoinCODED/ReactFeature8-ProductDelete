import styled, { createGlobalStyle } from "styled-components";

const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

const Description = styled.h4`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export {
  CookieWrapper,
  Description,
  GlobalStyle,
  ListWrapper,
  Title,
  ShopImage,
  ThemeButton,
};
