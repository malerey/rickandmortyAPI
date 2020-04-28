import React from "react";
import styled from "styled-components";

import banner from "../assets/banner.png";

const Banner = styled.div`
  height: 150px;
  width: 80%;
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  overflow: hidden;
  .img-banner img {
    width: 100%;
    height: 150px;
  }

  @media (max-width: 800px) {
    height: 120px;
    width: 90%;
    margin: 10px 10px;
    overflow: hidden;
    .img-banner img {
      height: 120px;
    }
  }
`;

const BannerBar = () => {
  return (
    <Banner>
      <div className="img-banner">
        <img src={banner} alt="Rick and Morty banner" />
      </div>
    </Banner>
  );
};

export default BannerBar;
