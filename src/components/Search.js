import React from 'react';
import styled from 'styled-components';

import rick from '../assets/mini-rick.png';

const SearchBar = styled.section`
  background-color: #000;
  color: #33FFC4;
  width: 80%;
  height: 60px;
  margin: 20px 20px;
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  font-size: 20px;
  form {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    input {
      width: 300px;
    }
  }
  .img-rick {
    height: 60px;
    width: auto;
    img {
      height: 100%;
      margin-left: 15px;
    }
  }
`

const Search = () => {

  return (
    <SearchBar>
      <form>
        <label>INICIAR BUSQUEDA</label>
        <input type='text' placeholder='Buscar personaje' />
        <div className='img-rick'><img src={rick} alt='Rick observa mientras buscas' /></div>

      </form>
    </SearchBar>
  );

}

export default Search;