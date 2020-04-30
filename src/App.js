import React from "react";
import styled from "styled-components";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Share Tech", sans-serif;
`;
const App = () => {
  return (
    <Body>
      <Nav />
      <Main />
      <Footer />
    </Body>
  );
};

export default App;
