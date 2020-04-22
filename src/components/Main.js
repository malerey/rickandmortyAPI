import React from 'react'; 
import styled from 'styled-components';

import portada from '../assets/main.png';

const MainSection = styled.main`
  width: 80%;
  height: 100%;
  margin: 20px 0px;
  .img-portada {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
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
