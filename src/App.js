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
  Title
} from "./styles";

const lightTheme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
  red: "#ff3232"
};

const darkTheme = {
  mainColor: "#fefafb", // main font color
  backgroundColor: "#242424", // main background color
  pink: "#ff85a2",
  red: "#ff3232"
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
