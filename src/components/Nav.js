import React from 'react'; 
import styled from 'styled-components';

import logo from '../assets/logo.png';

const NavBar = styled.nav`
  background-color: #000;
  color: #33FFC4;
  width: 80%;
  height: 60px;
  margin: 20px 0px;
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  font-size: 24px;
  .img-logo {
    width: 150px;
    height: 100%;
    img {
      width: 100%;
      height: auto;
      padding: 5px 10px;
    }
  }
  .menu-options {
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Nav = () => {
  
  return (
    
    <NavBar>
      <div className='img-logo'><img src={logo} alt='Rick and Morty logo' /></div>
      <div>
        <div className='menu-options'>
          <h5>PERSONAJES</h5>
          <h5>UBICACIONES</h5>
          <h5>EPISODIOS</h5>
        </div>
      </div>
    </NavBar>
    
  );

}

export default Nav;