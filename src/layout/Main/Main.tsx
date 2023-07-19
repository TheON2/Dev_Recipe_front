import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle, MainContainer, Root } from "./style";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <Root>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Root>
  );
};

export default Main;
