import React from 'react';
import styled from 'styled-components';

import portada from '../assets/main.png';

const MainSection = styled.main`
  width: 80%;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.50), 0 15px 12px rgba(0,0,0,0.40);
  overflow: hidden;
  .img-portada {
    width: 100%;
    height: 690px;
    img {
    width: auto;
    height: 700px;
    }
  }
  
  .menu-options {
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Main = () => {
  return (
    <MainSection>
      <div className='img-portada'><img src={portada} alt='portada de Rick and Morty' /></div>
    </MainSection>
  );
}

export default Main;
