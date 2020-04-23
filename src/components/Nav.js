import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const NavBar = styled.nav`
  background: #000;
  color: #33FFC4;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.50), 0 15px 12px rgba(0,0,0,0.40);
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
  a {
    text-decoration: none;
    color: #33FFC4;
  }
  a:visited {
    text-decoration: none;
    color: #33FFC4;
  }
`

const Nav = () => {
  return (
    <NavBar>
      <Link to='/App'><div className='img-logo'><img src={logo} alt='Rick and Morty logo' /></div></Link>
      <div>
        <div className='menu-options'>
          <Link to='/personajes'><h5>PERSONAJES</h5></Link>
          <Link to='/ubicaciones'><h5>UBICACIONES</h5></Link>
          <Link to='/episodios'><h5>EPISODIOS</h5></Link>
        </div>
      </div>
    </NavBar>
  );
}

export default Nav;