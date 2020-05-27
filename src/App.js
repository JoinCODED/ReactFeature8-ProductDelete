import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";

// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
      <>
        <Title>Cookies and Beyond</Title>
        <Description>Where cookie maniacs gather</Description>
        <ShopImage
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        />
      </>
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
