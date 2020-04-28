import React from "react";
import styled from "styled-components";

import portada from "../assets/main.png";

const MainSection = styled.main`
  width: 80%;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  .img-portada {
    width: 100%;
    height: 700px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 10px 0px;
    overflow: hidden;
    .img-portada {
      width: 100%;
      height: 300px;
    }
  }
`;

const Main = () => {
  return (
    <MainSection>
      <div className="img-portada">
        <img src={portada} alt="portada de Rick and Morty" />
      </div>
    </MainSection>
  );
};

export default Main;
