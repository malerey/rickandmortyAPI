import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  background: #000;
  color: #33ffc4;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  margin: 20px 0px;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  h5 {
    margin: 5px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #33ffc4;
  }
  a:visited {
    text-decoration: none;
    color: #33ffc4;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 40px;
    margin: 10px 0px;
    padding: 5px 0px;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterBar>
      <div>
        <h5>TP React - Rick and Morty API</h5>
        <h5>
          API <a href="https://rickandmortyapi.com/">rickandmortyapi.com</a>
        </h5>
      </div>
    </FooterBar>
  );
};

export default Footer;
